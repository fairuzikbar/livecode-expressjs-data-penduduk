const PeopleQuery = () => {
    const GET_PEOPLE = `SELECT * FROM people`;
    const CREATE_PEOPLE = `INSERT INTO people(id, nik, name, gender, dob, pob, province_id, regency_id, district_id, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`;
    const UPDATE_PEOPLE = `UPDATE people SET name = $1, gender = $2, dob = $3, pob = $4, province_id = $5, regency_id = $6, district_id = $7, updated_at = $8 WHERE nik = $9 RETURNING *`;
    const DELETE_PEOPLE = `DELETE FROM people WHERE nik = $1`;
    const SEARCH_PEOPLE_ID = `SELECT * FROM people WHERE nik = $1`;
    const SEARCH_PEOPLE = `SELECT pe.id, pe.name, pe.gender, pe.dob, pe.pob, pr.name AS province, 
    r.name AS regency, 
    d.name AS district
    FROM people AS pe
    LEFT JOIN province AS pr ON pe.province_id = pr.id
    LEFT JOIN regency AS r ON pe.regency_id = r.id
    LEFT JOIN district AS d ON pe.district_id = d.id
    WHERE pr.name = $1 AND r.name = $2 AND d.name = $3`

    return {
        GET_PEOPLE, CREATE_PEOPLE, UPDATE_PEOPLE, DELETE_PEOPLE, SEARCH_PEOPLE_ID, SEARCH_PEOPLE
    }
}

module.exports = PeopleQuery;