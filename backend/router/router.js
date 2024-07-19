const route = require("express").Router()
const path = require("path")
const connection = require('../model/connection.js');
const controller = require("../controller/controller.js")
const fun = require('../controller/function.js')

route.get('/', (req, res) => { controller.getHomePage(req, res) })



route.get("/api/data", async (req, res) => { fun.getInfoStudent(req, res) })


route.get("/api", (req, res) => {
    res.sendFile(path.resolve("../fontend/page2.html"));
})



module.exports = route