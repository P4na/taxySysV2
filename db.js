/** require dot env package */
require('dotenv').config()

const Pool = require('pg').Pool

const pool = new Pool({
    user:process.env.USERNAME_DB,
    host:process.env.HOST,
    database:process.env.DATABASE,
    password:process.env.PASSWORD,
    port:process.env.PORT,
})

pool.connect((err)=>{
    if (err){
        console.log(err)
    } else {
        console.log("connected")
    }
})

module.exports = pool