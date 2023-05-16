import { verify } from "jsonwebtoken";
import { createNote, getNotes, deleteNote, updateNote, verifyUser, signup } from "./service.js";



export async function handleGetNotes(req){
    const username = req.username
    const notes = await getNotes(username)
    return notes
}

export async function handleCreateNote(req){
    const note = {
        body : req.body.body,
        title : req.body.title,
        username : req.username
    }
   return createNote(note)
} 

export async function handleDeleteNote(req){
    const id = Number(req.params.id)
    const username = req.username
    return deleteNote(username, id)
}

export async function handleUpdateNote(req){
    const id = Number(req.params.id)
    const note = {
        body : req.body.body,
        title : req.body.title,
        username : req.username
    }
    return updateNote(id, note)
}

export async function handleLoginReq(req){
    const username = req.body.username
    const password = req.body.password
    const user = { username : username, password: password}
    return verifyUser(user)
}

export async function  handleSignup(req){
    const username = req.body.username
    const password = req.body.password
    const newUser = { username : username, password: password}
    return signup(newUser)
}