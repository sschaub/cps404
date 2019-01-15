let fs = require('fs');

fs.createReadStream("mydata.txt")
    .on('error', function(err) {
        console.log("Uh oh:", err);
    })
    .pipe(fs.createWriteStream('copy.txt'))
