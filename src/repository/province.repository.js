//Repo ini terhubung ke RDBMS, NoSQL, microservices
const ProvQuery = require("../config/province.query");
const ProvinceDto = require("../model/dto/province.dto");

//Repo ini urusan query dll
const ProvinceRepository = (db) => {
    const create = async (payload) => {
       try {
        const result = await db.query(
            ProvQuery().CREATE_PROVINCE,
            [
                payload.id,
                payload.name,
                new Date()
            ]);
            return ProvinceDto(result);
       } catch (error) {
        console.log(err.message);
       }
    }

    const list = async () => {
        try {
            const provinces = [];
            const result = await db.query(ProvQuery().GET_PROVINCE);
            for(let i = 0; i < result.rows.length; i++){
                provinces.push(ProvinceDto(result, i))
            }
            return provinces
        } catch (error) {
            return err.message;
        }
    };

    const getById = async (id) => {
        try {
            const result = await db.query(ProvQuery().SEARCH_PROVINCE_ID, [id]);
            return ProvinceDto(result);
        } catch (error) {
            return err.message
        }
    }

    return {
        create, list, getById
    }
}

module.exports = ProvinceRepository;