import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import './config/config.js'
import router from './routes/routes.js'


const app=express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors())
app.use("/fullstack15",router)



app.listen(3000,()=>{
    console.log("bu app 3000 portunda dinlenilir");
    
})