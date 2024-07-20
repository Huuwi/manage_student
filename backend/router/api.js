const api = require("express").Router()
const fun = require("../controller/function.js")
const connection = require("../model/connection.js")

api.get("/api/get_student_data", (req, res) => { fun.getDataByTableName(req, res, "student") })
api.get("/api/get_subject_data", (req, res) => { fun.getDataByTableName(req, res, "subject") })

module.exports = api