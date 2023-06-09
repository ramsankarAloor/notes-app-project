import  express  from "express";
import { handleLoginReq, handleSignup } from "./handler.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const publicRouter = express.Router()

publicRouter.post('/login', async function(req, res){
    const response = await handleLoginReq(req)
    if(response.msg){
         const accessToken = jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET)
         res.json( { accessToken : accessToken} )
    }else{
         res.status(400).json({error : response})
    }
 })

 publicRouter.post('/signup', async function(req, res){
    const response = await handleSignup(req)
    if(response.error){
        res.json({error : response})
    }else{
        const accessToken = jwt.sign(req.body.username, process.env.ACCESS_TOKEN_SECRET)
        res.json({ data : response, accessToken: accessToken})
    }
})

 export  default publicRouter