import Joi from "joi";



export let Fullstack15ValidationSchema=Joi.object({
    image:Joi.string().min(10).max(200),
    title:Joi.string().min(3).max(200),
    price:Joi.number().min(10).max(20000),
})