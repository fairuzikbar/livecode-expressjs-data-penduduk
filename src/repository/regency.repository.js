const RegencyQuery = require("../config/regency.query");
const RegencyDto = require("../model/dto/regency.dto");

const RegencyRepository = (db) => {
    const create = async (payload) => {
       try {
        const result = await db.query(
            RegencyQuery().CREATE_REGENCY,
            [
                payload.id,
                payload.name,
                payload.province_id,
                new Date()
            ]);
            return RegencyDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async () => {
        try {
            const regencies = [];
            const result = await db.query(RegencyQuery().GET_REGENCY);
            for(let i = 0; i < result.rows.length; i++){
                regencies.push(RegencyDto(result, i))
            }
            return regencies;
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(RegencyQuery().SEARCH_REGENCY_ID, [id]);
            return RegencyDto(result);
        } catch (error) {
            return err.message
        }
    }

    return {
        create, list, getById
    }
}

module.exports = RegencyRepository;