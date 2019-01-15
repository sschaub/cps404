let fs = require('fs');

let filename;
if (process.argv.length == 3) {
    filename = process.argv[2];
} else {
    filename = "mydata.txt";
}

let rdstrm = fs.createReadStream(filename);

rdstrm.on("data", function(buffer) {
    console.log("Got data: " + buffer.toString());
});

rdstrm.on("end", function() {
    console.log("\n\nThat's all, folks!");
});

rdstrm.on("error", function(err) {
    console.log("Oops: ", err);
});
