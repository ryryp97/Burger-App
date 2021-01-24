const connection = require("../config/connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
      },
    

    insertOne: () => {

    },

    updateOne: () => {

    },

};

// Export the orm object for the model (cat.js).
module.exports = orm;