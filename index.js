import express from 'express'; // Importing the Express framework
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRoute.js';
import orderRouter from './routes/orderRoute.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config(); // Load environment variables from .env file
const app = express(); // Creating an instance of an Express application


mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log("Database connected successfully");
}).catch(()=>{
    console.log("Database connection failed");
});

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Middleware to parse JSON request bodies
app.use((req,res,next)=>{    // Middleware to verify JWT token and extract user information
    const tokenString = req.header("Authorization");
    if(tokenString != null){
        const token = tokenString.replace("Bearer ", "");
        console.log(token);

        jwt.verify(token, process.env.SECRET_KEY,
            (err, decoded)=>{
                if(decoded != null){
                    console.log(decoded);
                    req.user = decoded;
                    next();
                }
                else{
                    console.log("Invalid token");
                    res.status(403).json({
                        message : "Unauthorized user"
                    });
                }
            });
    }else{
        next();
    }
});

// app.get('/', (req,res)=>{
//     res.json({
//         message : "this is a get request"
//     });
//     console.log(req.body);
// })

// app.post('/', (req,res)=>{
//         console.log(req.body);

//         // const studentSchema = mongoose.Schema(
//         //     {
//         //         name :String,
//         //         age : Number,
//         //         stream : String,
//         //         email : String
//         //     }
//         // );

//         // const Student = mongoose.model("student", studentSchema);

//         const student = new Student({
//             name : req.body.name,
//             age : req.body.age,
//             stream : req.body.stream,
//             email : req.body.email
//         });

//         student.save().then(()=>{
//             res.json({
//                 message : "Student added successfully"
//             });
//         }).catch(()=>{
//             res.json({
//                 message : "Failed to add student"
//             })
//         });
    
// });

app.use('/products', productRouter);
app.use('/users', userRouter);
app.use('/orders', orderRouter);

app.listen(4000, ()=>{
    console.log("Server is running on port 4000");
});


