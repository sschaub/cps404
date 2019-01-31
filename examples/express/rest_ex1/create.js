var fs = require("fs");
module.exports = function (req, res, next) {
    var path = req.store + "/" + req.params.fileName;
    var data = req.body.data || "";
    fs.writeFile(path, data, {
        flag: "wx"
    }, function (error) {
        if (error) {
            return res.send(400);
        }
        res.send(201);
    });
};