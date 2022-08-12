const Regency = require('../regency')

//DTO => Data Transfer Object
const RegencyDto = (result, index = 0) => {
    return Regency (
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].province_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = RegencyDto;