var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydatabase"
});

const main = () => {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "SELECT * FROM student";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    });
}

module.exports = main;