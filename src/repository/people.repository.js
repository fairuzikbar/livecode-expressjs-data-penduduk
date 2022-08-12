const PeopleQuery = require("../config/people.query");
const PeopleDto = require("../model/dto/regency.dto");

const PeopleRepository = (db) => {
    const create = async (payload) => {
       try {
        const generateNIK = () => {
            let randomNum = '000' + (Math.floor(Math.random()*2 + 1));
            let birthArray = payload.dob.split('-');
            if(payload.gender.toLowerCase() === 'P'){
                birthArray[2] = Number(birthArray[2]) + 40;
            }
            birthArray[0] = birthArray[0].split('');
            let nik = payload.province_id + payload.regency_id + payload.district_id + birthArray[2] + birthArray[1] + birthArray[0][2] + birthArray[0][3] + randomNum;
            return nik;
        }

        const result = await db.query(
            PeopleQuery().CREATE_PEOPLE,
            [
                payload.id,
                generateNIK(),
                payload.name,
                payload.gender,
                payload.dob,
                payload.pob,
                payload.province_id,
                payload.regency_id,
                payload.district_id,
                new Date()
            ]);
            return PeopleDto(result);
       } catch (error) {
        console.log(error);
       }
    }

    const getById = async (id) => {
        try {
            const result = await db.query(RegencyQuery().SEARCH_REGENCY_ID, [id]);
            return RegencyDto(result);
        } catch (error) {
            return err.message
        }
    }

    const list = async (prov, reg, dist) => {
        try {
            const peoples = [];
            if(prov && reg && dist){
                const result = await db.query(PeopleQuery().SEARCH_PEOPLE, [`%${prov}%, %${reg}%, %${dist}%`]);
                for(let i = 0; i < result.rows.length; i++){
                peoples.push(PeopleDto(result, i))
            }
            } else {
                return `People in province ${prov}, regency ${reg}, and district ${dist} not found!`
            }
            return peoples
        } catch (error) {
            return err.message;
        }
    };

    return {
        create, getById, list
    }
}

module.exports = PeopleRepository;