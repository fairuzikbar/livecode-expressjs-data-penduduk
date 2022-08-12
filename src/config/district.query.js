const DistrictQuery = () => {
    const GET_DISTRICT = `SELECT * FROM district`;
    const CREATE_DISTRICT = `INSERT INTO district(id, name, regency_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *`;
    const UPDATE_DISTRICT = `UPDATE district SET name = $1, regency_id = $2, updated_at = $3 WHERE id = $4 RETURNING *`;
    const DELETE_DISTRICT = `DELETE FROM district WHERE id = $1`;
    const SEARCH_DISTRICT_ID = `SELECT * FROM district WHERE id = $1`;

    return {
        GET_DISTRICT, CREATE_DISTRICT, UPDATE_DISTRICT, DELETE_DISTRICT, SEARCH_DISTRICT_ID
    }
}

module.exports = DistrictQuery;