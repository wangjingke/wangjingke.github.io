
function upload() {
    var fileUpload = document.getElementById("fileUpload");
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.readAsText(fileUpload.files[0]);
            reader.onload = loadHandler;
            function loadHandler(event) {
                var csv = event.target.result;
                output = Papa.parse(csv);
            }
        } else {
            alert("This browser does not support HTML5.");
        }
    } else {
        alert("Please upload a valid CSV file.");
    }
    document.getElementById("process").disabled = false;
}

function getAllIndexes(arr, val) {
    var indexes = [];
    for(j = 0; j < arr.length; j++) {
        if (arr[j] === val) {indexes.push(j)};
    }
    return indexes;
}

Date.prototype.addDays=function(d){return new Date(this.valueOf()+864E5*d)};
function trimester(date, num) {
    var dueString = date.split("-");
    dueDate = new Date(dueString[0], dueString[1]-1, dueString[2]); // year, month, day
    predict = new Date(dueDate.addDays(num));
    return predict;
}

function dateCut(x) {
    return(x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate());
}

function unique(list) {
  var result = [];
  $.each(list, function(j, e) {
    if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}
