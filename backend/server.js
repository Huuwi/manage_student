const express = require("express");
const connection = require('./model/connection.js');
const path = require('path');

const app = express()

app.use(express.static(path.join(__dirname, '../fontend')));

app.get('/', (req, res) => {
    res.sendFile('E:/project/manageStudent/fontend/page.html');
    // console.log(connection());
})

app.listen(6969, () => {
    console.log("server is running on the port 6969");
})