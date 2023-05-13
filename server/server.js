import{handleGetNotes, handleCreateNote, handleDeleteNote, handleUpdateNote} from "./handler.js"
import  express  from "express";
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
