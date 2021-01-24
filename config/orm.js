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
    

    insertOne: function(table, val, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${val}");`;
    
        connection.query(queryString, val, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      },

    updateOne: () => {

    },

};

// Export the orm object for the model (cat.js).
module.exports = orm;