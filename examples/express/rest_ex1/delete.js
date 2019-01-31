var fs = require("fs");
module.exports = function (req, res, next) {
    var path = req.store + "/" + req.params.fileName;
    fs.unlink(path, function (error) {
        if (error) {
            return res.send(400);
        }
        res.send(200);
    });
};