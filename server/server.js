const express = require('express');
const app = express();

app.listen(4000);

app.use(express.json());

let notes = [
    {   
        id: 1,
        title: '13 reasons why',
        body: 'A popular young adult novel that has also been adapted to a Netflix series'
    },
    {   
        id: 2,
        title: 'Old monk',
        body: 'Monday chandrante divasam aanenna paraya'
    },
    {   
        id: 3,
        title: 'Tuesday',
        body: 'chovvazhcahkk chovva dosham undo'
    },
    {   
        id: 4,
        title: 'Wednesday',
        body: 'wednesday oru series nte matram peralla'
    },
    {   
        id: 5,
        title: 'ffsedgwrtywsdfadf',
        body: 'asdgwretwerywh rfgvsfdhyutusdfa edfwr yfgbsdfvbdjyj sdjkdfg psedf sfruhfjeic orfgukdjdfyh dasdfasd fasdasaasdads dasdas dasdasda dashgfgfdr trdtrd trdtrtrdy 7tryredtyrd y7tryredt6rd  ytetrtrd  tetre65 trtre dasda dfdfgasdfasd asdfsaasdasd asdda sdasdd dasasdsd adsasdg hygggfgf dsasdsd dasdas asdads sda sdasdfasdf adsf adsfsdf  asdfasdf'
    },
    {   
        id: 6,
        title: 'sdgsehsfbggharfh',
        body: 'dfawry eturydfjhs dfgaewr wytujrdths dfg'
    },
    {   
        id: 7,
        title: '',
        body: 'fdfdasds dfsfhrtjfgnxcvbas igyfaksjdbcv kdskjfhisdf bolasidu0ahv'
    }
]
let globalUserId = 7;

function getNoteById(idGiven){
    let errorMsg = { error : 'not found'}
    for(let note of notes){
        if(idGiven === note.id){
            console.log(note);
            return note;
        }
    }
    return errorMsg;
}

app.get('/health', function(req, res){
    res.status(200).send('OK');
})

app.get('/notes', function(req, res){
    res.json(notes);
})

app.post('/note', function(req, res){
    const reqBody = req.body;
    globalUserId += 1;
    const afterAddingId = {['id'] : globalUserId , ...reqBody};
    notes.push(afterAddingId);
    res.json(notes);
})

app.delete('/note/:id', function(req, res){
    const idOfNote = Number(req.params.id);
    // const noteToBeDeleted = getNoteById(idOfNote);
    notes = notes.filter( note => note.id !== idOfNote);
    res.json(notes);
})

function updateNoteByID(givenId, updateToThisValues){
    for(let note of notes){
        if(note.id === givenId){
            console.log('here');
            note.title = updateToThisValues.title;
            note.body = updateToThisValues.body;
            return note;
        }
    }
    return 'object not found';
}

app.put('/note/:id', function(req, res){
    const givenId = Number(req.params.id)
    const updatedNote = updateNoteByID(givenId, req.body);
    res.json(updatedNote);
})

let userDetails = [
    {
        email : 'somethingisthis@gmail.com',
        password : 'thisissomething'
    }, 
    {
        email : 'aakecomedy@yahoo.com',
        password : 'inienthaidua'
    },
    {
        email : 'varietypidi@gmail.com', 
        password : 'thamashakalikkalle'
    }
]

