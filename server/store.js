

import {Sequelize} from "sequelize"
import bcrypt, { hash } from 'bcrypt'

const sequelize = new Sequelize('notes_app', 'postgres', '5454', {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
});

export async function getNotesFromStore(username){
    let result
    try {
        result = await sequelize.query(`select  id, note, title, created_at, updated_at from notes where username='${username}' order by created_at desc`, { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}


export async function createNoteToStore(note){
    let result
    try {
        await sequelize.query(`insert into notes (note, title, username) values ('${note.body}', '${note.title}', '${note.username}')`)
        result = await sequelize.query("select  id, note, title, created_at, updated_at from notes order by id desc limit 1", { type : Sequelize.QueryTypes.SELECT, raw: true})
    } catch (e) {
        result = {error: "error from db", err_msg: e}
    }
    return result
}

export async function deleteNoteFromStore(username, id) {
    let result
    try {
        const noteToDelete = await sequelize.query(`select id from notes where id=${id} and username='${username}'`, { type : Sequelize.QueryTypes.SELECT, raw: true})
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
        const noteToUpdate = await sequelize.query(`select id from notes where id=${id} and username='${note.username}'`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(noteToUpdate.length > 0){
            const amuru = await sequelize.query(`update notes set note = '${note.note}', title = '${note.title}', updated_at = NOW() where id = ${id}`)
            result =  await sequelize.query(`select id, note, title, created_at, updated_at from notes where id=${id}`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        }else{
            result = { error : 'No such note exist'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}

export async function verifyUserInStore(user){
    let result
    try {
        const userMatch = await sequelize.query(`select username, password from users where username='${user.username}'`,  { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(userMatch.length>0){
            const hashCompare = await bcrypt.compare(user.password, userMatch[0].password)
            if(hashCompare){
                result = {msg : 'login success'}
            }else{
                result = {error : 'wrong password'}
            }
        }else{
            result = {error : 'invalid user'}
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
   
    return result
}

export async function signupToStore(newUser){
    let result
    try {
        const match = await sequelize.query(`select  username from users where username = '${newUser.username}'`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        if(match.length > 0){
            result = {error : "username already exist"}
        }else{
            const hashedPassword = await bcrypt.hash(newUser.password, 10)
            await sequelize.query(`insert into users (username, password) values ('${newUser.username}', '${hashedPassword}')`)
            // result = {msg : 'login success'}
            result = await sequelize.query(`select  username, password from users order by id desc limit 1`, { type : Sequelize.QueryTypes.SELECT, raw: true})
        }
    } catch (error) {
        result = {error: "error from db", err_msg: error}
    }
    return result
}