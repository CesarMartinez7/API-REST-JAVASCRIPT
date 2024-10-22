const express = require("express"); // CREACION DE LA API
const cors = require("cors"); 
const mysql = require("mysql2");


const app = express()
app.use(cors())


const conec = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"oyasumi",
    database:"nodomobiliario"
});


conec.exe

conec.connect((err)=>{
    if(err){
        throw err;
    }
    console.log("Conectado con exito")
})

app.get("/datos",(req,res)=>{
    const sql = "SELECT * FROM productos";
    conec.query(sql,(err,resultado)=>{
        if(err){throw err};
        res.json(resultado)
    })
})

app.post("/login",(req,respuest)=>{
    
})



app.listen(3000,()=>{
    console.log("Servidor corriendo el puerto 3000")
    console.log("Server: http://localhost:3000/datos")
})


















// // INSERT DATA
// const sql = "insert into productos(Nombre,Categoria,Dimension) values (?,?,?)";
// const data = ['Mesa Cakaguate','MOBILIARIO','400x400'];
// conec.execute(sql,data,(error,resultado,fields)=>{
//     if(error){
//         throw error
//     }
//     console.log(resultado)
//     console.log(fields)
// })



// // QUERY 

// const sqlQuery = "SELECT * FROM productos"
// conec.query(sqlQuery,(error,data,field)=>{
//     if (error){throw error};
//     console.log(data)
//     console.log(field)

// })