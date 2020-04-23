
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
        password: req.body.password,
        table:req.body.table
    }

    // var re_bool = await login_database(req.body.name,req.body.password)
    // console.log("return bool "+ re_bool)
    var returnValue;
    var sql = "SELECT * FROM customers WHERE CustomerName = '"+data_login.name+"' AND Password = '"+data_login.password+"'";
    await db.query(sql,await function (err, result) {
        if (err) throw err;
        console.log("have access 1 user = "+data_login.name);
        var customerid = result[0]["CustomerID"]
        console.log(result)
        // console.log(id)
        if(result != false){
            console.log("table = "+data_login.table)
            console.log("pass")
            console.log(customerid)

            let ts = Date.now();
            let date_ob = new Date(ts);
            let year = date_ob.getFullYear()
            let month = ("0" + (date_ob.getMonth() + 1)).slice(-2)
            let date = ("0" + date_ob.getDate()).slice(-2);
            let hours = date_ob.getHours();
            let minutes = date_ob.getMinutes();
            let seconds = date_ob.getSeconds();

            let DateTimeNow = year+"/"+month+"/"+date+";"+hours+":"+minutes+":"+seconds

            console.log("date time")
            console.log(DateTimeNow)

            //    ,  "+data_login.table+"
            var sql2 = "INSERT INTO sales (SaleDateTime,CustomerID,No_table) VALUES ('"+DateTimeNow+"',"+result[0]["CustomerID"]+",'"+data_login.table+"')"
            db.query(sql2,function (err, result) {
                if (err) throw err;
                console.log("insert bill name = "+ data_login.name);         

                var sql3 = "SELECT SaleID FROM sales WHERE SaleDateTime = '"+DateTimeNow+"'"
                db.query(sql3,function (err, result) {
                    if (err) throw err;
                    var saleid = result[0]["SaleID"]
                    console.log("Sale id")
                    console.log(saleid) 

                    
                    res.send({
                        status : "Logout",
                        SaleID: saleid,
                        CustomerID:customerid,
                    })
                })            
            })

        }
        else{
            console.log("not pass")
            res.send({
                status : "Login",
                SaleID:0,
                CustomerID:0
            })

        }
    });

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
var x = 0;
app.post('/buyls',(req,res)=>{
    var data_buy = {
        SaleID : req.body.SaleID,
        ProductName : req.body.ProductName,
        ProductID : req.body.ProductID,
        Price : req.body.Price
    }
  
    var sql2 = "INSERT INTO sale_details (SaleID,ProductName,ProductID,Price) VALUES ("+data_buy.SaleID+",'"+data_buy.ProductName+"',"+data_buy.ProductID+","+data_buy.Price+")"
    db.query(sql2,function (err, result) {
        if (err) throw err;
        console.log("insert 1 order to db")
        res.send({
            buy : "pass"
        })
    
    })



    x = x+1
    console.log("post method buy saleid = "+data_buy.SaleID+"productid = "+data_buy.ProductID+" price = "+data_buy.Price+":::"+x)
})



app.post('/bill',(req,res)=>{
    let data_bill = {
        CustomerID: req.body.CustomerID
    }

    console.log(data_bill.CustomerID)


    var sql = "SELECT * FROM sale_details WHERE SaleID = "+data_bill.CustomerID+"";
    db.query(sql,async function (err, result) {
        if (err) throw err;
        console.log("have access menu");
        console.log(result)
        res.send(result)
     })

})



app.listen(4000,()=>{console.log("server start")})