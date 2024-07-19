const path = require("path")
const fun = require('./function.js')



const getHomePage = (req, res) => {
    res.sendFile(path.resolve("../fontend/page.html"));
}




const controller = {
    getHomePage: getHomePage,
}



module.exports = controller