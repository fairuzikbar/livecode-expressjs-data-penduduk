const RegencyQuery = () => {
    const GET_REGENCY = `SELECT * FROM regency`;
    const CREATE_REGENCY = `INSERT INTO regency(id, name, province_id, created_at) VALUES ($1, $2, $3, $4) RETURNING *`;
    const UPDATE_REGENCY = `UPDATE regency SET name = $1, province_id = $2, updated_at = $3 WHERE id = $4 RETURNING *`;
    const DELETE_REGENCY = `DELETE FROM regency WHERE id = $1`;
    const SEARCH_REGENCY_ID = `SELECT * FROM regency WHERE id = $1`;

    return {
        GET_REGENCY, CREATE_REGENCY, UPDATE_REGENCY, DELETE_REGENCY, SEARCH_REGENCY_ID
    }
}

module.exports = RegencyQuery;