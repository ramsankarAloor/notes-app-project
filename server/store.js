

import {Sequelize} from "sequelize"

const sequelize = new Sequelize('notes_app', 'postgres', '5454', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

export async function getNotesFromStore(){
    let result
    try {
        result = await sequelize.query("select * from notes", { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}


export async function postNoteToStore(obj){
    const noteValue = obj.note
    const titleValue = obj.title
    let result
    try {
        await sequelize.query(`insert into notes (note, title) values ('${noteValue}', '${titleValue}')`)
        result = await sequelize.query("select * from notes order by id desc limit 1", { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}

export async function deleteNoteFromStore(id) {
    let result
    try {
        const noteToDelete = await sequelize.query(`select * from notes where id=${id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(noteToDelete.length > 0){
            await sequelize.query(`delete from notes where id =${id}`)
            result = { msg : 'Deletion successful'}
        }else{
            result = { msg : 'No such note exist'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}

export async function updateNoteInStore(obj) {
    let result
    try {
        const noteToUpdate = await sequelize.query(`select * from notes where id=${obj.id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        console.log(noteToUpdate);
        if(noteToUpdate.length > 0){
            await sequelize.query(`update notes set note = '${obj.newNote}', title = '${obj.newTitle}', updated_at = NOW() where id = ${obj.id}`)
            result =  await sequelize.query(`select * from notes where id=${obj.id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        }else{
            result = { msg : 'No such note exist'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}