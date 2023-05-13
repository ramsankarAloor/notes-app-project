import { createNote, getNotes, deleteNote, updateNote } from "./service.js";



export async function handleGetNotes(req){
    const notes = await getNotes()
    return notes
}

export async function handleCreateNote(req){
    const note = {
        body : req.body.body,
        title : req.body.title
    }
   return createNote(note)
} 

export async function handleDeleteNote(req){
    const id = Number(req.params.id)
    return deleteNote(id)
}

export async function handleUpdateNote(req){
    const id = Number(req.params.id)
    const note = {
        body : req.body.body,
        title : req.body.title
    }
    return updateNote(id, note)
}