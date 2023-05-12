import { postNote, getNotes, deleteNote, updateNote } from "./service.js";



export async function handleGetNotes(req){
    let notes = await getNotes()
    return notes
}

export async function handlePostNote(req){
    const newNote = req.body.body;
    const newTitle = req.body.title;
   return postNote({ note : newNote , title : newTitle})
} 

export async function handleDeleteNote(req){
    const id = Number(req.params.id)
    return deleteNote(id)
}

export async function handleUpdateNote(req){
    const id = Number(req.params.id)
    const newNote  = req.body.body
    const newTitle = req.body.title
    return updateNote({ id: id, newNote: newNote, newTitle: newTitle})
}