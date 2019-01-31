var fs = require("fs");
module.exports = function (req, res, next) {
    var path = req.store + "/" + req.params.fileName;
    fs.readFile(path, {
        encoding: "utf8"
    }, function (error, data) {
        if (error) {
            return res.send(404);
        }
        res.send(200, {
            data: data
        });
    });
};