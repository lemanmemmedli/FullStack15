import mongoose from "mongoose"



const Fullstack15Schema=({
    image:String,
    title:String,
    price:Number
})

export let Fullstack15Model=mongoose.model("fullstack15",Fullstack15Schema)