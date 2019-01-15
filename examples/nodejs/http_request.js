let http = require("http");

let url;
if (process.argv.length == 3) {
    url = process.argv[2];
} else {
    url = "http://cs.bju.edu/cps/courses/cps401/";
}

http.get(url, function (response) {
    let body = '';

    if (response.statusCode != 200)
    {
        console.log("Request succeeded, but got response code:" + response.statusCode)
        return;
    }
    response.setEncoding("utf8");

    response.on("data", function (data) {
        body += data;
    }).on("end", function () {
        console.log(body);
    });
}).on("error", function(err) {
    console.log("Request failed: " + err);
});