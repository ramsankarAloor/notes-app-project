import { verify } from "jsonwebtoken"
import { getNotesFromStore, createNoteToStore, deleteNoteFromStore, updateNoteInStore, verifyUserInStore, signupToStore } from "./store.js"

export async function getNotes(){
    let notes = await getNotesFromStore()
    return notes
}

export async function createNote(note){
   return createNoteToStore(note)
}

export async function deleteNote(id){ 
    return deleteNoteFromStore(id)
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