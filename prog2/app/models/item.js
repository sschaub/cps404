'use strict';

var db = require('../config/db');

function Item(id, callNo, author, title, pubInfo, descript, series, addAuthor, updateCount) {
    this.id = id;
    this.callNo = callNo;
    this.author = author;
    this.title = title;
    this.pubInfo = pubInfo;
    this.descript = descript;
    this.series = series;
    this.addAuthor = addAuthor;
    this.updateCount = updateCount;
}

Item.search = function (callback) {
    db.pool.getConnection(function (err, connection) {
        connection.query('select * from items order by title limit 10', function (err, data) {
            //console.log(data);
            connection.release();              
            if (err) return callback(err);

            if (data) {
                var results = [];
                for (var i = 0; i < data.length; ++i) {
                    var item = data[i];
                    results.push(new Item(item.ID, item.CALLNO, item.AUTHOR, item.TITLE, item.PUB_INFO,
                        item.DESCRIPT, item.SERIES, item.ADD_AUTHOR, item.UPDATE_COUNT));
                }
                callback(null, results);
            } else {
                callback(null, null);
            }
        });
    });
}

module.exports = Item;