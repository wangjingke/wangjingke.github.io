---
layout: post
title: "Some Snippets in R"
date: 2016-10-12
---

```Rcript
# Reading a csv files with tolerance to empty files
readCSV = function(target, header = TRUE) {
    output=try(read.csv(target, header = header, stringsAsFactors = FALSE, skipNul = TRUE, encoding = "UTF-8"), silent = TRUE)
    if (inherits(output, "try-error")) return(NA) else return(output)
}
```

```r
# Combination of elements from two string vectors
outer(c("a", "b", "c"), c(1, 2), paste0)
```

```R
# Take the first element from each vector item after strsplit
sapply(strsplit(vector, "_"), "[[", 1)
sapply(strsplit(vector, "_"), head, 1)
# Take the second last element from each vector item after strsplit
sapply(strsplit(vector, "_"), tail, 2)
```

```R
# Creating empty data frame with column names
data.frame(matrix(NA, nrow = 10, ncol = 3, dimnames = list(c(), c("V1", "V2", "V3"))))
setNames(data.frame(matrix(NA, nrow = 10, ncol = 3)), c("V1", "V2", "V3"))
```

```R
# Converting string time to Unix time
time = strptime(stringTime, format = "%Y-%m-%d %H:%M:%S", tz = "America/Los_Angeles")
# function to detect number of digits in the hr/min and add 0 if it is 1
digit = function(timepoint) {
    inputtime = strsplit(timepoint, ":")[[1]]
    outputtime = paste0(paste(ifelse(lapply(inputtime, nchar) == 1, paste0("0", inputtime), inputtime), collapse = ":"), ":00")
    return(outputtime)
}

# convert seconds since midnight to actual time
convSec = function (x) {
    add0 = function (y) {paste0(rep("0", 2-nchar(y)), y)}
    x = as.numeric(x)
    hr = x %/% 3600
    min = (x-hr*3600) %/% 60
    sec = x-hr*3600-min*60
    return(paste0(add0(hr), ":", add0(min), ":", add0(sec)))
}
# roughly calculate age
as.numeric(difftime(currentDate, birthday, units = "days")) %/% 365.25
```

```R
# Parallel computing
library(foreach)
library(doParallel)

# Function to split a vector down to job list for each node
triage=function(jobs, nCL) {    
    splits=rep(1:nCL, length.out=length(jobs))
    return(split(jobs, splits))
}

nCL=4
cl=makeCluster(nCL)
registerDoParallel(cl)
# export object from global environment to parallel environment if necessary
clusterExport(cl, c("data"))

# return results that require combining
jobList=triage(MATCHs, nCL)
checklist=foreach(m=1:nCL, .combine = rbind) %dopar% {
    job=jobList[[m]]
    checklistX=data.frame(job=job, survey=NA, stringsAsFactors = FALSE)
    for (j in 1:length(job)) {checklistX[j, "survey"]=any(grepl("survey", list.files(paste0(job[j], "/.match"))))}
    print(checklistX)
}
stopCluster(cl)

```

```R
# grep any csv file without DataTable in filename
grep("^((?!DataTable).)*\\.csv$", c(ListX), perl = TRUE, value = TRUE)
# grep content between patterns (substitute matches to empty string)
sub("^.*survey/(.*?)/Bed_Wake.*", "\\1", vectors)
```

```R
# max column numbers in a file
col.num = max(count.fields(fileX, skip = 10, sep = ","))
# reading files from the 11th line and only the first 4 columns
read.csv(fileX, skip = 10, header = FALSE, colClasses = c(rep("integer", 4), rep("NULL", col.num - 4)))
```

```R
# count consecutive appearance of elements (less than 120 consecutive appearances of integers less than 100 are considered 0s) in a vector (data$y)
vert=ifelse(data$y>0 & data$y<100, 1, data$y) # change numeric 1 to 100 into 1
chunk=data.frame(values=rle(vert)$values, lengths=rle(vert)$lengths) # consecutive 0, 1 and other numbers
chunk$filtered=ifelse(chunk$values==1 & chunk$lengths<=120, 0, chunk$values) # change consecutive 1s (0<integer<100) whose length is less than 120 into 0
rleX=rle(chunk$filtered) # extract smoothed movement (consecutive 0s (including integers<100))
chunk$indicator=rep(seq_along(rleX$lengths), rleX$lengths) # assign a new class to each repeating integer
compress=data.frame(values=rleX$values, aggregate(chunk$lengths, by=list(c(chunk$indicator)), FUN=sum, na.rm=TRUE))
```

```R
# aggregate
aggregate(chunk$lengths, by=list(c(chunk$indicator)), FUN=sum, na.rm=TRUE)
aggregate(lengths~indicator, data=chunk, FUN=sum, na.rm=TRUE)
```








