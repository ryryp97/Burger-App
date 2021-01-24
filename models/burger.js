const orm = require("../config/orm.js");

const burgers = {
    selectAll: () => {
        orm.selectAll('burgers', )
    },

    insertOne: () => {
        orm.insertOne('burgers', )
    },

    updateOne: () => {
        orm.updateOne('burgers', )
    },

}

module.exports = burgers;