import express from 'express'
import { Fullstack15Controller } from '../controller/productcontroller.js'

const router=express.Router()

router.get("/",Fullstack15Controller.getAll)
router.get("/:id",Fullstack15Controller.getById)
router.delete("/:id",Fullstack15Controller.deleteproduct)
router.post("/",Fullstack15Controller.postproduct)

export default router