db = require('../db')

function saveUser(name, surname, email, password, cf) {
    db.db_connection()
    pool.query(`INSERT INTO taxysys.user(name, surname, email, password, cf) 
    VALUES ('${name}','${surname}','${email}','${password}','${cf}');`,
    (err, res)=>{
        if(!err){
            console.log("query completed")
        }else{
            console.log(err.message)
        }
    })
    pool.end;
}

module.exports = saveUser