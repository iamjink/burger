var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "sql3.freesqldatabase.com",
    port: 3306,
    user: "sql3327345",
    password: "wCIfd9Mym9",
    database: "sql3327345"
});


if (process.env.JAWSDB_URL) {
    // Database is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // Database is local
    connection = mysql.createConnection({
        host: "sql3.freesqldatabase.com",
        port: 3306,
        user: "sql3327345",
        password: "wCIfd9Mym9",
        database: "sql3327345"
    })
};


connection.connect(function (err) {
    if (err) {
        console.error("error connection: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;