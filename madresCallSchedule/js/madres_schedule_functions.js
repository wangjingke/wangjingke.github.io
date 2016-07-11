
function upload(inputFile) {
    var fileUpload = document.getElementById(inputFile);
    var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/;
    if (regex.test(fileUpload.value.toLowerCase())) {
        if (typeof (FileReader) != "undefined") {
            var reader = new FileReader();
            reader.readAsText(fileUpload.files[0]);
            reader.onload = loadHandler;
            function loadHandler(event) {
                var csv = event.target.result;
                redCap = Papa.parse(csv);
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
function trimester(day, num) {
    var dayString = day.split("-");
    dayDate = new Date(dayString[0], dayString[1]-1, dayString[2]); // year, month, day
    predict = new Date(dayDate.addDays(num));
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

function gestationalAge(day, dueDate) {
    for(i = 0; i <= 281; i++) {
        dayX = trimester(dueDate, i-280);
        if (dateCut(dayX)==dateCut(day)) {
            return(Math.floor(i/7) + "w" + i%7 + "d");
            break;
        }
    }
    return("Out of range")
}

function arrayGrow(length) {
	var empty = [];
	for (i = 0; i < length; i++) {
		empty.push("");
	}
	return empty;
}


