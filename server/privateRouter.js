import express from "express"
import{handleGetNotes, handleCreateNote, handleDeleteNote, handleUpdateNote} from "./handler.js"
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const privateRouter = express.Router()
privateRouter.use(authenticateToken)

privateRouter.get('/notes', async function(req, res){
    const responseObject = await handleGetNotes(req)
    if (responseObject.error) {
        res.json({error : responseObject})
    }
    res.json({data : responseObject});
})

privateRouter.post('/note', async function(req, res){
    const responseObject = await handleCreateNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }
    res.json({ data : responseObject})
})

privateRouter.delete('/note/:id', async function(req, res){
    const responseObject = await handleDeleteNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }else{
        res.json({ data : responseObject})
    }
   
})

privateRouter.put('/note/:id', async function(req, res){
    const responseObject = await handleUpdateNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }else{
        res.json({ data : responseObject})
    }
})


function authenticateToken(req, res, next){
    const authHeader = req.headers[ 'authorization' ]
    if(authHeader === null) return res.sendStatus(401)

    jwt.verify( authHeader, process.env.ACCESS_TOKEN_SECRET, (err, username) =>{
        if (err) {
            return res.sendStatus(403)
        }
        req.username = username
        next()
    })
}



export default privateRouter