const connection = require("../model/connection.js")



const getDataByTableName = async (req, res, table_name) => {
    let data0
    let result = await connection.execute(`SELECT * FROM ${table_name}`)
        .then((data) => { data0 = data; return "get dữ liệu thành công: " + data.join(" ").toString() })
        .catch((e) => { return e + "\nlỗi khi lấy dữ liệu tại bảng : " + table_name })
    res.send(data0)
    console.log(result);
    return result
}


const insertTable = async (table_name, properties, values) => {
    let result = await connection.execute(`INSERT INTO ${table_name} (${properties.join(",")}) values (${values.map((e) => { return `'${e}'` }).join(",")})`)
        .then(() => { return "insert thành công : " + values.join(',') })
        .catch((e) => { return e + "\nlỗi khi insert : " + values.join(",") })

    console.log(result);
    return result
}



const fun = {
    getDataByTableName: getDataByTableName,
    insertTable: insertTable,
}


module.exports = fun