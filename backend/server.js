const express = require("express");
const connection = require('./model/connection.js');
const path = require('path');



const main = async () => {


    let data0 = await connection.execute("select * from student").then((data) => { return data[0]; })
    console.log(data0);

    const app = express()

    app.use(express.static(path.join(__dirname, '../fontend')));


    app.get('/', (req, res) => {
        res.sendFile(path.resolve("../fontend/page.html"));
        // console.log(connection());
    })

    app.get("/api/data", (req, res) => {
        console.log(connection.execute("select * from student"));
        return connection.execute("select * from student")
    })


    app.get("/api", (req, res) => {
        res.sendFile(path.resolve("../fontend/page2.html"));
    })

    app.listen(6969, () => {
        console.log("server is running on the port 6969");
    })
}

main()