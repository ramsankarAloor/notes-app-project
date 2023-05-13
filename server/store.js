

import {Sequelize} from "sequelize"

const sequelize = new Sequelize('notes_app', 'postgres', '5454', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

export async function getNotesFromStore(){
    let result
    try {
        result = await sequelize.query("select  id, note, title, created_at, updated_at from notes", { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}


export async function createNoteToStore(note){
    let result
    try {
        await sequelize.query(`insert into notes (note, title) values ('${note.body}', '${note.title}')`)
        result = await sequelize.query("select  id, note, title, created_at, updated_at from notes order by id desc limit 1", { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}

export async function deleteNoteFromStore(id) {
    let result
    try {
        const noteToDelete = await sequelize.query(`select id from notes where id=${id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(noteToDelete.length > 0){
            await sequelize.query(`delete from notes where id =${id}`)
            result = { msg : 'Deletion successful'}
        }else{
            result = { error : 'No such note exist'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}

export async function updateNoteInStore(id, note) {
    let result
    try {
        const noteToUpdate = await sequelize.query(`select id from notes where id=${id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(noteToUpdate.length > 0){
            await sequelize.query(`update notes set note = '${note.body}', title = '${note.title}', updated_at = NOW() where id = ${id}`)
            result =  await sequelize.query(`select id, note, title, created_at, updated_at from notes where id=${id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        }else{
            result = { error : 'No such note exist'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}