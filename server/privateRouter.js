import express from "express"
import{handleGetNotes, handleCreateNote, handleDeleteNote, handleUpdateNote} from "./handler.js"
import jwt from 'jsonwebtoken'


const privateRouter = express.Router()

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


export default privateRouter