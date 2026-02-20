


// const express = require('express');
// const app = express();
// const path = require('path');
// const multer = require('multer');

// app.use(express.json());
// app.use('/uploads', express.static('uploads'));

// const storage = multer.diskStorage({
//     destination: './uploads',
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });

// const upload = multer({ storage: storage });

// app.post('/image-upload', upload.single('image'), (req, res) => {
//     if (!req.file) {
//         return res.status(400).json({
//             message: "No image uploaded"
//         });
//     }

//     res.status(200).json({
//         message: "Image uploaded successfully",
//         file: req.file.filename,
//         url: `/uploads/${req.file.filename}`
//     });
// });

// app.post('/multipleImages', upload.array('uploads'), (req, res) => {
//     if (!req.files) {
//         return res.status(400).json({
//             message: "No image uploaded"
//         });
//     }

//     res.status(200).json({
//         message: "Image uploaded successfully",
//     //      url: `/uploads/${req.files}`
//  });
// });



// CRUD    Q1

const express = require('express');
const app = express();
const db = require('./db');
const multer = require('multer');
const path = require('path');
app.use(express.json());
app.use('/uploads', express.static('uploads'));

const storage = multer.diskStorage({
    destination: './uploads',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });



// Register with image 

app.post('/register/student', upload.single('images'),(req, res) => {
    const { name, email, password} = req.body;
const images="https://res.cloudinary.com/<your-account>/image/upload/"+req.file.filename;

    const sqlQ = "INSERT INTO students(name,email,password,images) VALUES(?,?,?,?)";

    db.query(sqlQ, [name, email, password,images], (error, result) => {
        if (error) {
            return res.status(500).json({
                message: "Server Internal Error",
                error: error
            });
        }

        res.status(201).json({
            message: "Student Register Successfully"
        });
    });
});



//  get All Students with image

app.get('/AllStudents',(req,res)=>{
   
    const sqlQ="SELECT * FROM students";
    db.query(sqlQ,(error,results)=>{
        if(error){
            res.json({
                message:"Errors: "+error
            })
        }
        res.json({
            message:"All Students Fetched Successfully",
            results
        })
    })
    
})

/// Update Data using PUT Method  By ID

app.put('/updateStudent/:id', upload.single('images'),(req, res) => {
    const sId = parseInt(req.params.id);
    const { name,email, password} = req.body;
    const images=req.file.filename;
    const sqlQ = "UPDATE students SET name=?,email=?, password=?,images=? WHERE id=?";

    db.query(sqlQ, [name,email, password,images, sId], (error, result) => {
        if (error) {
            console.log("Server Internal Error:" + error);
            res.status(500).json({
                message: "Server Internal Error",
                error
            })
        }

        if (result.affectedRows === 0) {
            res.status(404).json({
                message: "Student Not Found"
            })
        }
        else {
            res.status(201).json({
                message: "Student Updated Successfully",
                student: {
                    sId,name,email, password,images
                }
            })
        }
    })
})


// delete

/// Delete Student By Id
app.delete('/deleteStudent/id/:id',upload.single('images'),(req,res)=>{
const sId=parseInt(req.params.id);
const sqlQ="DELETE FROM students WHERE id=?";

db.query(sqlQ,[sId],(error,result)=>{
   if(error){
            res.status(500).json({message:"Server internal Errors:"+error})
        }
        if(result.affectedRows===0){

 res.status(404).json({
        message:"Student Not Found"
    }) 

        }
        else{
            
 res.status(201).json({
        message:"Student Deleted Successfully",
        sId
    }) 
        }

    })
})




app.listen(5000, () => {
    console.log("Server is Running...")
})