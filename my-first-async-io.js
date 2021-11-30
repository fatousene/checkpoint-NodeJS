const fs=require('fs');
var newlines = fs.readFile(process.argv[2],'utf8', function(err,data) {
      var len=data.split("/n").length;  
});