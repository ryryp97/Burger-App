const orm = require("../config/orm.js");

const burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: (val, cb) => {
        orm.insertOne('burgers', val, function(res) {
            cb(res);
          });
    },

    updateOne: () => {
        orm.updateOne('burgers',)
    },

}

module.exports = burgers;