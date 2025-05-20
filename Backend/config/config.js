import mongoose from "mongoose";
import { config } from "dotenv";
config()

mongoose.connect(process.env.DB_PASSWORD)
.then(()=>{
    console.log("connected");
    
})
.catch((err)=>{
    console.log(err);
    
})