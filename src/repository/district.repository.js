const DistrictQuery = require("../config/district.query");
const DistrictDto = require("../model/dto/district.dto");

const DistrictRepository = (db) => {
    const create = async (payload) => {
       try {
        const result = await db.query(
            DistrictQuery().CREATE_DISTRICT,
            [
                payload.id,
                payload.name,
                payload.regency_id,
                new Date()
            ]);
            return DistrictDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async () => {
        try {
            const districts = [];
            const result = await db.query(DistrictQuery().GET_DISTRICT);
            for(let i = 0; i < result.rows.length; i++){
                districts.push(DistrictDto(result, i))
            }
            return districts;
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(DistrictQuery().SEARCH_DISTRICT_ID, [id]);
            return DistrictDto(result);
        } catch (error) {
            return err.message
        }
    }

    return {
        create, list, getById
    }
}

module.exports = DistrictRepository;