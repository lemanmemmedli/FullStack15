import { Fullstack15Model } from "../models/productmodel.js"
import { Fullstack15ValidationSchema } from "../validation/productvalidation.js"




export let Fullstack15Controller={
    getAll:async(req,res)=>{
        let products=await Fullstack15Model.find()
        res.send(products)
    },
    getById:async(req,res)=>{
        let {id}=req.params
        let products=await Fullstack15Model.findById(id)
        res.send(products)
    },
    deleteproduct:async(req,res)=>{
        let {id}=req.params
        let products=await Fullstack15Model.findByIdAndDelete({_id:id})
        res.send(products)
    },
    postproduct:async(req,res)=>{
        let {error}=Fullstack15ValidationSchema.validate(req.body)
        if(error){
            res.send(error.details[0].message)
        }
        let newproduct=Fullstack15Model(req.body)
        await newproduct.save()
        res.send(newproduct)
    },

}