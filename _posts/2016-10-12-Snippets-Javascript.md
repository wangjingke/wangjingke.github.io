---
layout: post
title: "Some Snippets in Javascript"
date: 2016-10-12
---

```javascript
// return unique values
function unique(list) {
    var result = [];
    $.each(list, function(j, e) {
        if ($.inArray(e, result) == -1) result.push(e);
    });
    return result;
}
```

```javascript
// return property of an object
function getKeys(obj) {
    var keys = [];
    for(var key in obj){
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}
```

```javascript
// decrypt
function decipher(encryptedString, password) {
    var key = CryptoJS.enc.Utf8.parse(password);
    var decrypted = CryptoJS.AES.decrypt(encryptedString, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}
// encrypt
function encipher(rawString, password) {
    var key = CryptoJS.enc.Utf8.parse(password);
    var encrypted = CryptoJS.AES.encrypt(rawString, key, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
}
```

```javascript
// get all indexes
function getAllIndexes(arr, val) {
    var indexes = [];
    for(var j = 0; j < arr.length; j++) {
        if (arr[j] === val) {indexes.push(j)};
    }
    return indexes;
}
```

```javascript
// date manipulation
Date.prototype.addDays=function(d){return new Date(this.valueOf()+864E5*d)};
function countDay(day, num) {
    var dayString = day.split("-");
    dayDate = new Date(dayString[0], dayString[1]-1, dayString[2]); // year, month, day
    predict = new Date(dayDate.addDays(num));
    return predict;
}
// date to string
function dateCut(x) {
    return(x.getFullYear()+"-"+(x.getMonth()+1)+"-"+x.getDate());
}
```

```javascript
// empty array with specific length
function arrayGrow(length) {
	var empty = [];
	for (var i = 0; i < length; i++) { // local counter
		empty.push("");
	}
	return empty;
}
```

```javascript
// set cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}
// get cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
```

```javascript
// download array as csv file
function download(contentToDownload, originalFileName) {
    newFileName = originalFileName.split(".csv")[0]+"_decoded.csv";

    content = [];
    contentToDownload.forEach(function(infoArray, index){
       dataString = infoArray.map(function(item) {return '"' + item + '"'}).join(",") + "\n"; //wrap each item with quotes, then join
       content.push(dataString);
    });

    var file = new File(content, newFileName, {type: "text/csv;charset=utf-8"});
    saveAs(file);
}
```

```javascript
// reading csv file
function readCSV(inputFile) {
    var fileUpload = document.getElementById(inputFile);
    var reader = new FileReader();
    reader.readAsText(fileUpload.files[0]);

    reader.onload = (function(f) {
        return function(event) {
            var csv  = event.target.result;
            data = [];
            Papa.parse(csv, {
                step:function(results, parser) {
                    data.push(results.data[0]);
                }
            });
            // whatever to do below
            result = decryptFile(data);
            download(contentToDownload = result, originalFileName = f.name);
        }
    })(fileUpload.files[0]) 
    // wrapping onload function in another function, so the closure gives access to file name
    // define the data as global variable so its content is accessible outside of the readCSV function 
}
```

















