const connection = require('./backend/model/connection.js')
const fun = require('./backend/controller/function.js')
const main = async () => {

    let a = ['001', '002', '003']
    // console.log(` values (${a.map((e) => { return `'${e}'` }).join(",")})`);
    await fun.insertTable("student", ["id", "name", "address", "YOB"], ["006", "bui xuan an", "ha giang", "2004"]);

}
main()