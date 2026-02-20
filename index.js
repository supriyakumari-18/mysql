// =================Insert (post Data)===================

// const express=require('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());

// app.post('/createstaff',(req,res)=>{
//     const {name,email,password}=req.body;

//     if(!name|| !email|| !password){
//         response.status(404).json({message:"All fields are required"})
//     }

//     const sqlQ="INSERT INTO staff(name,email,password)VALUES(?,?,?)";

//     db.query(sqlQ,[name,email,password],(err,result)=>{
//         if(err){
//             console.error("error"+err);
//             res.status(500).json({message:"Database insert failed"});
//         }

//         res.status(201).json({
//             message:"Created successfully!",
//             Data:{id:result.insertId,name,email,password},
//         })
//     })
// })

// =====........======

// const express=require('express');
// const app=express();
// const data=require('./db');
// app.use(express.json());

// app.post('/createstudent',(req,res)=>{
//     const {name,address}=req.body;

//     if(!name|| !address){
//         response.status(404).json({message:"All fields are required"})
//     }

//     const sqlQ="INSERT INTO students(name,address)VALUES(?,?)";

//     data.query(sqlQ,[name,address],(err,result)=>{
//         if(err){
//             console.error("error"+err);
//             res.status(500).json({message:"Database insert failed"});
//         }

//         res.status(201).json({
//             message:"Created successfully!",
//             Data:{id:result.insertId,name,address},
//         })
//     })
// })


// ======......=====

// const express=require('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());

// app.post('/createteacher',(req,res)=>{
//     const {name,email,password}=req.body;

//     if(!name|| !email||!password){
//         response.status(404).json({message:"All fields are required"})
//     }

//     const sqlQ="INSERT INTO teachers(name,email,password)VALUES(?,?,? )";

//     db.query(sqlQ,[name,email,password],(err,result)=>{
//         if(err){
//             console.error("error"+err);
//             res.status(500).json({message:"Database insert failed"});
//         }

//         res.status(201).json({
//             message:"Created successfully!",
//             Data:{id:result.insertId,name,email,password},
//         })
//     })
// })



// ===========  post and get database==============

// ..........hospitals..........

// const  express=require ('express');
// const app=express();
// const db=require('./db');


// app.use(express.json());

// app.post('/createstaff',(req,res)=>{
//     const {name,email,phone}=req.body;

//     if(!name||!email||!phone){
//         res.status(400).json({message:"All fields are required"})
//     }

//     const sqlQ="INSERT INTO staff(name,email,phone) VALUES (?,?,?)";

//     db.query(sqlQ,[name,email,phone],(err,result)=>{
//         if(err){
//             res.status(500).json({message:"Database insert failed",err})
//         }
//         res.status(201).json({
//             message:"New Data added successfully.",
//             name,email,phone
//         })
//     })
// })


// app.get('/staff',(req,res)=>{
//    const sqlQ= "SELECT * FROM staff";

//    db.query(sqlQ,(err,result)=>{
//    if(err){
//     req.status(500).json({message:"Internal Server Error"})
//    }
//    res.status(200).json({
//     message:"Data fetched successfully",
//     result
//    })
//  })
// })



// ==========Register and login with email,password and phone============

// const express=require('express');
// const app=express();
// const db=require('./db');
// app.use(express.json());

// // register
// app.post('/register/student', (request, response) => {
//     const { name, email, password } = request.body;
//     const sqlQ = "INSERT INTO students (name,email,password) VALUES (?,?,?)";
//     db.query(sqlQ, [name, email, password], (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Server Internal Error" + error
//             })
//         }
//         response.status(201).json({
//             message: "Student Register Successfully"

//         })

//     })
// })



// /// Login with email and password
// app.post('/login/student', (request, response) => {

//     const { email, password } = request.body;

//     const sqlQ = "SELECT * FROM students WHERE email=? AND password=?";

//     db.query(sqlQ, [email, password], (error, result) => {

//         if (error) {
//             return response.status(500).json({
//                 message: "Server Internal Error"
//             });
//         }

//         if (result.length === 0) {
//             return response.status(401).json({
//                 message: "Invalid email or password"
//             });
//         }
//         const student = result[0];

// if (student.password !== password) {
//     return response.status(401).json({
//         message: "Invalid  password"
//     });
// }

//         return response.status(200).json({
//             message: "Student Login Successfully"
//         });

//     });
// });


// Q

// const express = require('express');
// const app = express();
// const db = require('./db');
// app.use(express.json());

// app.post('/register/student', (request, response) => {
//     const { name, email, password, phone } = request.body;
//     const sqlQ = "INSERT INTO students(name ,email,password,phone) VALUES (?,?,?,?)";
//     db.query(sqlQ, [name, email, password, phone], (error, result) => {
//         if (error) {
//             response.status(500).json({
//                 message: "Internal Server Error"
//             })
//         }
//         response.status(201).json({
//             message: " Student Register Successfully ",
//             login_status: false
//         })
//     })
// })


// app.post('/login/student', (request, response) => {
//     const { email, password } = request.body;
//     const sqlQ = "SELECT *FROM students WHERE email=? AND password=?"
//     db.query(sqlQ, [email, password], (error, result) => {
//         if (error) {
//             return response.status(500).json({
//                 message: "Internal Server Error"
//             })
//         }
//         if (result.length === 0) {
//             return response.status(401).json({
//                 message: "Invalid email and password"
//             })
//         }

//         const updatesql = "UPDATE students SET login_status=? WHERE email=? ";
//         db.query(updatesql,[true,email],(updateError)=>{
//             if(updateError){
//                 response.status(500).json({
//                     message:"error updating login status" 
//                 });
//             }
//         });

//         response.status(201).json({
//             message: "Student login Successfully",
//             login_status: true
//         })
//     })
// })




// app.listen(3000, () => {
//     console.log("Server is Running...");
// })


// register with multiple images
app.post('/multipleImages', upload.array('images'), (req, res) => {
    const images=req.files.filesname;
    if (!req.files) {
        return res.status(400).json({
            message: "No image uploaded"
        });
    }

    res.status(200).json({
        message: "Image uploaded successfully",
    //      url: `/uploads/${req.files}`
 });
});
