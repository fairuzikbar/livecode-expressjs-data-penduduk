const ProvQuery = () => {
    const GET_PROVINCE = `SELECT * FROM province`;
    const CREATE_PROVINCE = `INSERT INTO province(id, name, created_at) VALUES ($1, $2, $3) RETURNING *`;
    const UPDATE_PROVINCE = `UPDATE province SET name = $1, updated_at = $2 WHERE id = $3 RETURNING *`;
    const DELETE_PROVINCE = `DELETE FROM province WHERE id = $1`;
    const SEARCH_PROVINCE_ID = `SELECT * FROM province WHERE id = $1`;

    return {
        GET_PROVINCE, CREATE_PROVINCE, UPDATE_PROVINCE, DELETE_PROVINCE, SEARCH_PROVINCE_ID
    }
}

module.exports = ProvQuery;