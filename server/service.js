import { getNotesFromStore, postNoteToStore, deleteNoteFromStore, updateNoteInStore } from "./store.js"

export async function getNotes(){
    let notes = await getNotesFromStore()
    return notes
}

export async function postNote(obj){
   return postNoteToStore(obj)
}

export async function deleteNote(id){ 
    return deleteNoteFromStore(id)
}


export async function updateNote(obj){
    return updateNoteInStore(obj)
}