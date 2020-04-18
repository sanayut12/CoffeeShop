
const express = require('express')
const mysql = require('mysql') // เรียกใช้งาน MySQL module
 

const app = express()

// กำหนดการเชื่อมต่อฐานข้อมูล
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345678',
    database : 'final'
  })
 
// ทำการเชื่อมต่อกับฐานข้อมูล 
db.connect((err) =>{
    if(err){ // กรณีเกิด error
        console.error('error connecting: ' + err.stack)
        return
    }
    console.log('connected as id ' + db.threadId)
})
db.end() 


app.get("/register",()=>{
    console.log("jdojojs")
})


app.listen(4000,()=>{console.log("server start")})