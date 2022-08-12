const UserQuery = require("../config/user.query");
const UserDto = require("../model/dto/user.dto");
const { passwordUtil, passwordCompare } = require('../utils/password.util')

const UserRepository = (db) => {
    const create = async (payload) => {
       try {
        const password = await passwordUtil('admin');
        const username = 'admin';
        const result = await db.query(
            UserQuery().CREATE_USER,
            [
                username,
                password
            ]);
            return UserDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async (keyword) => {
        try {
            const users = [];
            if(keyword){
                const result = await db.query(UserQuery().SEARCH_USER,[`%${keyword}%`]);
                for(let i = 0; i < result.rows.length; i++){
                users.push(UserDto(result, i))
            }
            } else {
                const result = await db.query(UserQuery().SELECT_USER_LIST);
                for(let i = 0; i < result.rows.length; i++){
                    users.push(UserDto(result, i))
                }
            }
            return users
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(UserQuery().SELECT_USER_ID,[id]);
            return UserDto(result);
        } catch (error) {
            return err.message
        }
    }

    const update = async (payload, id) => {
        try {
            const password = await passwordUtil(payload.password)
            const result = await db.query(UserQuery().UPDATE_USER,[
                payload.username, password, id
                ])
            return UserDto(result); 
        } catch (error) {
            return error.message
        }
    }

    const deleted = async (id) => {
        try {
            await db.query(UserQuery().DELETE_USER,[id])
            return { message : `Delete ID ${id} berhasil`}
        } catch (error) {
            return error.message;
        }
    }

    const getUserByUsernamePassword = async (username, password) => {
        try {
            const result = await db.query(UserQuery().SELECT_USER, [username]);
            if(result.rowCount === 0){
                return null;
            }
            const validPassword = await passwordCompare(password, result.rows[0].password);
            if(!validPassword){
                return null;
            }
            return await getById(result.rows[0].id)
        } catch (error) {
            return error.message
        }
    }

    return {
        create, list, getById, update, deleted, getUserByUsernamePassword
    }
}

module.exports = UserRepository;