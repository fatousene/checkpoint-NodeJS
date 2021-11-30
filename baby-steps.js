var len = process.argv.length;
var sum = 0;
for(var i = 2; i<len ;i++)
    sum += +process.argv[i];
    console.log(sum);



//console.log(process.argv)