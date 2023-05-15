import{handleGetNotes, handleCreateNote, handleDeleteNote, handleUpdateNote, handleLoginReq, handleSignup} from "./handler.js"
import  express  from "express";

import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config()

const app = express();


app.listen(4000);

app.use(express.json());

app.get('/health', function(req, res){
    res.status(200).send('OK');
})

app.get('/notes', async function(req, res){
    const responseObject = await handleGetNotes(req)
    if (responseObject.error) {
        res.json({error : responseObject})
    }
    res.json({data : responseObject});
})

app.post('/note', async function(req, res){
    const responseObject = await handleCreateNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }
    res.json({ data : responseObject})
})

app.delete('/note/:id', async function(req, res){
    const responseObject = await handleDeleteNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }else{
        res.json({ data : responseObject})
    }
   
})

app.put('/note/:id', async function(req, res){
    const responseObject = await handleUpdateNote(req)
    if(responseObject.error){
        res.json({error : responseObject})
    }else{
        res.json({ data : responseObject})
    }
})

app.post('/login', async function(req, res){
   const response = await handleLoginReq(req)
   if(response.msg){
        const accessToken = jwt.sign(req.body, process.env.JWT_SECRET)
        res.json( { accessToken : accessToken} )
   }else{
        res.json({error : response})
   }
})

app.post('/signup', async function(req, res){
    const response = await handleSignup(req)
    if(response.error){
        res.json({error : response})
    }else{
        const accessToken = jwt.sign(req.body, process.env.JWT_SECRET)
        res.json({ data : response, accessToken: accessToken})
    }
})
