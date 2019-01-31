var create = require("./create");
var read = require("./read");
var update = require("./update");
var del = require("./delete");

module.exports.mount = function (app) {
    app.post("/:fileName", create);
    app.get("/:fileName", read);
    app.put("/:fileName", update);
    app.delete("/:fileName", del);
};