---
layout: post
title: "Some helper functions for Spark in Scala"
date: 2018-01-16
---

Here are some helper functions that I wrote in Scala for importing data from Hadoop to Spark shell. They are organized [here](https://gist.github.com/wangjingke/7df2af851cab5d9e52d0fe439239389d).

```scala
// this function converts strings to spark sql types, just to save a few keystrokes.
def typeMatch(input: String) = {
    import org.apache.spark.sql.types._
    input match {
        case "Int" => IntegerType
        case "String" => StringType
        case "Date" => DateType
        case "Double" => DoubleType
        case "Timestamp" => TimestampType
    }
}

// function to construct schema before converting rdd to dataframe, it referred the above typeMatch function.
def constructSchema(schema: List[(String, Int)]) = {
    val len = schema.length
    // val output = schema.map(x => List.fill(x._2)(x._1)).reduce(_ ++ _)
    val output = schema.flatMap(x => List.fill(x._2)(typeMatch(x._1)))
    output
}

// function that read files from Hadoop, and convert it to dataframe using a predefined schema. The sc is a sparkContext session, and it should be already set up, just like sqlContext.
def readHadoopToSparkDF(sc: org.apache.spark.SparkContext, sqlContext: org.apache.spark.sql.SQLContext, hdfs_path: String, schema: List[org.apache.spark.sql.types.DataType], sep: String = "\t", cols: Array[String] = Array()): org.apache.spark.sql.DataFrame = {
    import org.apache.spark.sql.Row
    import org.apache.spark.sql.types._
    val rdd = sc.textFile(hdfs_path)
    val header = if (cols.length == 0) rdd.first.split(sep).map(_.trim) else cols
    val body = if (cols.length == 0) rdd.filter(row => row != header) else rdd
    val df_schema_list = (header, schema, List.fill(schema.length)(true)).zipped.toList
    val df_schema = StructType(df_schema_list.map(x => StructField(x._1, x._2, x._3)))
    // function to infer row type based on schema
    def inferRowType (elm_type: List[org.apache.spark.sql.types.DataType])(elm: Array[String]) = {
        def inferElmType (elm_type: org.apache.spark.sql.types.DataType, elm: String) = {
            var out: Any = null
            if (elm == "") {
                out = null
            } else {
                out = elm_type match {
                    case StringType => elm.trim
                    case IntegerType => elm.trim.toInt
                    case DoubleType => elm.trim.toDouble
                    case DateType => java.sql.Date.valueOf(elm.trim) // better convert to the YYYY-MM-dd format first
                    case TimestampType => java.sql.Timestamp.valueOf(elm.trim)
                }
            }
            out // must specify output to the outer environment
        }
        elm_type.zip(elm).map(x => inferElmType(x._1, x._2))
    }
    val rdd_type = inferRowType(schema)(_)
    val df_row = body.map(_.split(sep)).map(r => Row.fromSeq(rdd_type(r).toSeq))
    //val df_row = body.map(_.split(sep)).map(r => Row.fromSeq((r(0).trim.toInt +: r.tail.map(_.trim)).toSeq))
    sqlContext.createDataFrame(df_row, df_schema)
}

// drop multiple columns, which was not available before spark2.x
def dropColumns(df: org.apache.spark.sql.DataFrame, cols: List[String]) = {
    // function to drop spark dataframe columns in bulks, which is available after spark2.x
    import org.apache.spark.sql.Column
    // df.select(df.columns.filter(colName => !cols.contains(colName)).map(x => new Column(x)): _*) // :_* appended for the parameter to be considered an argument sequence
    df.select(df.columns.diff(cols).map(x => new Column(x)): _*)
}

// change column type, a abstract for later functions
def changeColType(df: org.apache.spark.sql.DataFrame, col: String, newType: String) = {
    df.withColumn(col, df(col).cast(typeMatch(newType)))
}


// two functions that perform the same task, change the type of multiple columns
def changeMulColType(df: org.apache.spark.sql.DataFrame, colName: List[String], newType: List[String]): Either[String, org.apache.spark.sql.DataFrame]  = {
    // use either to handle errors, so need to use Right(x).right.get to retrieve the df
    if (newType.length > 1 && newType.length != colName.length) {
        Left("Column name and type have different lengths")
    } else {
        val types = if (newType.length == 1) List.fill(colName.length)(newType.head) else newType
        Right(
            colName.zip(types).foldLeft(df) {
                (table, zipped_col_type) => changeColType(table, zipped_col_type._1, zipped_col_type._2)
            }
        )
    }
}

def changeMulColType(df: org.apache.spark.sql.DataFrame, colName: List[String], newType: List[String]) = {
    val types = if (newType.length == 1) List.fill(colName.length)(newType.head) else newType
    colName.zip(types).foldLeft(df) {
        (table, zipped_col_type) => changeColType(table, zipped_col_type._1, zipped_col_type._2)
    }
}


def changeAllColType(df: org.apache.spark.sql.DataFrame, sourceType: String, newType: String) = {
    df.schema.filter(_.dataType == typeMatch(sourceType)).foldLeft(df) {
        // keyword case is optional
        case (table, col) => changeColType(table, col.name, newType)
    }
}
```
