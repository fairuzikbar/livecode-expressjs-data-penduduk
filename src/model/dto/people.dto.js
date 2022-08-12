const People = require('../people')

//DTO => Data Transfer Object
const PeopleDto = (result, index = 0) => {
    return People (
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].gender,
        result.rows[index].dob,
        result.rows[index].pob,
        result.rows[index].province_id,
        result.rows[index].regency_id,
        result.rows[index].district_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = PeopleDto;