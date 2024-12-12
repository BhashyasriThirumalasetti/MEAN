const express=require("express");
const  cors=require("cors");
const userRoute = require("../server/Routes/userRoutes")
const mongoose = require("mongoose")
const app=express();
mongoose.connect("mongodb://0.0.0.0:27017")
.then(()=> console.log("mongodb connected succesfully"))
.catch((error)=> console.log(error))


app.use(express.json());

const corsOptions={
    origin:["http://localhost:5173","http://localhost:5174"],
    methods:["POST","GET"],
    allowedheaders:["Content-Type","Authorization"],
    credentials:true,
};
app.use(cors(corsOptions));


app.get("/",(req,res)=>{
    res.send("Hello");
});
app.use('/user',userRoute)

app.listen(5000,()=>{
    console.log("server is running")

});