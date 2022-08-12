const District = require('../district')

//DTO => Data Transfer Object
const DistrictDto = (result, index = 0) => {
    return District (
        result.rows[index].id,
        result.rows[index].name,
        result.rows[index].regency_id,
        result.rows[index].created_at,
        result.rows[index].updated_at
    )
}

module.exports = DistrictDto;