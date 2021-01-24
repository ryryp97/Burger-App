const orm = require("../config/orm.js");

const burgers = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: () => {
        orm.insertOne('burgers',)
    },

    updateOne: () => {
        orm.updateOne('burgers',)
    },

}

module.exports = burgers;