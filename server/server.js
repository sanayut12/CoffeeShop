
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


app.use(express.static('public'))
app.use(express.json({limit:'1mb'}))

// app.post("/register",(req,res)=>{
//     console.log("I got request")
//     console.log(req.body)
//     const data = req.body
//     res.json({
//         status: "success",
//         name: data.name,
//         no: data.no

//     })
// })


app.post("/register",(request,response)=>{
    console.log("resive post method")
    console.log(request.body)
    const data=request.body
    response.json({
        status:"success",
        name : data.name,
        pass : data.pass
    })

    //res.send("data")
})



app.listen(4000,()=>{console.log("server start")})