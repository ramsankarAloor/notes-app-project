import { verify } from "jsonwebtoken"
import { getNotesFromStore, createNoteToStore, deleteNoteFromStore, updateNoteInStore, verifyUserInStore, signupToStore } from "./store.js"

export async function getNotes(username){
    let notes = await getNotesFromStore(username)
    return notes
}

export async function createNote(note){
   return createNoteToStore(note)
}

export async function deleteNote(username , id){ 
    return deleteNoteFromStore(username, id)
}


export async function updateNote(id, note){
    return updateNoteInStore(id, note)
}

export async function verifyUser(user){
    return verifyUserInStore(user)
}

export async function signup(newUser){
    return signupToStore(newUser)
}