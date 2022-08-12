const PeopleQuery = () => {
    const GET_PEOPLE = `SELECT * FROM people`;
    const CREATE_PEOPLE = `INSERT INTO people(id, nik, name, gender, dob, pob, province_id, regency_id, district_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`;
    const UPDATE_PEOPLE = `UPDATE people SET name = $1, gender = $2, dob = $3, pob = $4, province_id = $5, regency_id = $6, district_id = $7, updated_at = $8 WHERE nik = $9 RETURNING *`;
    const DELETE_PEOPLE = `DELETE FROM people WHERE nik = $1`;
    const SEARCH_PEOPLE_ID = `SELECT * FROM people WHERE nik = $1`;
    const SEARCH_PEOPLE = `SELECT * FROM people WHERE province = $1 AND regency = $2 AND district = $2`

    return {
        GET_PEOPLE, CREATE_PEOPLE, UPDATE_PEOPLE, DELETE_PEOPLE, SEARCH_PEOPLE_ID, SEARCH_PEOPLE
    }
}

module.exports = PeopleQuery;