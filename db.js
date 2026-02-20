// =================Insert (post Data)===================

// const mysql=require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"hotelmanagement"
// })

// db.connect((error)=>{
//     if(error){
//         console.log("Database Connection Failed."+error);
//     }
//     else{
//         console.log("Database Connected Successfully.")
//     }
// })
// module.exports=db;

// =====........======

// const mysql=require('mysql2');
// const data=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"edugaon"
// })

// data.connect((error)=>{
//     if(error){
//         console.log("Database Connection Failed."+error);
//     }
//     else{
//         console.log("Database Connected Successfully.")
//     }
// })
// module.exports=data;

 // =====........======
// const mysql=require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"school"
// })

// db.connect((error)=>{
//     if(error){
//         console.log("Database Connection Failed."+error);
//     }
//     else{
//         console.log("Database Connected Successfully.")
//     }
// })
// module.exports=db;


// ===========  post and get database==============

// ..........hospitals..........

// const mysql=require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"hospitals"
// })
// db.connect((error)=>{
//     if(error){
//         console.log("Database Connection failed"+error)
//     }
//     else{
//         console.log("Database connected successfully.")
//     }
// })
// module.exports=db;


// ==========College==========

// const mysql=require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"college",
// })
// db.connect((error)=>{
//     if(error){
//         console.log("Database Connection failed"+error)
//     }
//     else{
//         console.log("Database connected successfully.")
//     }
// })
// module.exports=db;


// ====edugaon====

const mysql=require('mysql2');
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"edugaon",
})
db.connect((error)=>{
    if(error){
        console.log("Database Connection failed"+error)
    }
    else{
        console.log("Database connected successfully.")
    }
})
module.exports=db;


// ====employee====
// const mysql=require('mysql2');
// const db=mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"employee",
// })
// db.connect((error)=>{
//     if(error){
//         console.log("Database Connection failed"+error)
//     }
//     else{
//         console.log("Database connected successfully.")
//     }
// })
// module.exports=db;