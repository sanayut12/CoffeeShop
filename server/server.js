
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
    }
    console.log('connected as id ' + db.threadId)
})

// var sql = "INSERT INTO customers (CustomerName,Password,Gender,CustomerType,CustomerTelNo) VALUES ('art','Art','Art','Member','art')";
// db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted registered 1 user");
// });

//inster register
function register_into_database(name,password,gender,phone){
    //Gender	enum('M', 'F')
    //CustomerType	enum('Member', 'VIP', 'Other')

    var sql = "INSERT INTO customers (CustomerName,Password,Gender,CustomerType,CustomerTelNo) VALUES ('"+name+"','"+password+"','"+gender+"','Member','"+phone+"')";
    db.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted registered 1 user");
    });
}

async function login_database(name,password){

    var returnValue;
    console.log(name+":"+password)

    //var sql = "SELECT * FROM customers"
    var sql = "SELECT CustomerName,Password FROM customers WHERE CustomerName = '"+name+"' AND Password = '"+password+"'";
    await db.query(sql,await function (err, result) {
        if (err) throw err;
        console.log("have access 1 user = "+name);
            // var data_name = result[0]["CustomerName"]
            // var data_pass = result[0]["Password"]
    
            // if(name == data_name && password == data_pass){
            //     console.log("true")
            //     return 'true'
            // }
            // else{
            //     console.log('false')
            //     return 'false'
            // }
        console.log(result)
        if(result != false){
            console.log("pass")
             returnValue = 'true'
        }
        else{
            console.log("not pass")
            returnValue = 'false'
        }
    });

    console.log(returnValue)
    return returnValue
}






app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods','POST, GET, PUT, PATCH, DELETE, OPTIONS')
    res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    return next()
 })


app.use(express.static('public'))
app.use(express.json())


var movies = [
    {
        id: 0,
        name: "The Flash",
        type: "series",
        isPublished: false
    }
];

app.post('/register', (req, res) => {
    const movie = {
        id: movies.length + 1,
        name: req.body.name,
        type: req.body.type,
        isPublished: req.body.isPublished
    };
    console.log(movie)
    movies.push(movie);
    res.send(movie);
});


app.post('/registers',(req,res)=>{
    console.log("register access!")
    var data_register = {
        name : req.body.name,
        password : req.body.password,
        gender : req.body.gender,
        phone : req.body.phone
    }
    console.log(data_register)

    register_into_database(data_register.name,data_register.password,data_register.gender,data_register.phone)

    var status_data ={
        status : "register success!"
    }
    res.send(status_data)
})

app.post('/login',async (req,res)=>{
    console.log("login access")
    var data_login = {
        name: req.body.name,
        password: req.body.password
    }

    // var re_bool = await login_database(req.body.name,req.body.password)
    // console.log("return bool "+ re_bool)
    var returnValue;
    var sql = "SELECT CustomerName,Password FROM customers WHERE CustomerName = '"+data_login.name+"' AND Password = '"+data_login.password+"'";
    await db.query(sql,await function (err, result) {
        if (err) throw err;
        console.log("have access 1 user = "+data_login.name);
        console.log(result)
        if(result != false){
            console.log("pass")
            res.send({status : "Logout"})
        }
        else{
            console.log("not pass")
            res.send({status : "Login"})

        }
    });

    // var status_login = {
    //     status: "login success"
    // }
    // res.send(status_login)

})



app.post('/menu',async(req,res)=>{
    console.log("menu access!")

    var sql = "SELECT * FROM products";
    db.query(sql,async function (err, result) {
        if (err) throw err;
        console.log("have access menu");
 
        var returnResult = JSON.stringify(result)
        console.log(returnResult)
        res.send(returnResult)
     })
})





app.listen(4000,()=>{console.log("server start")})