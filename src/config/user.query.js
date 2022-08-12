const UserQuery = () => {
    const SELECT_USER = `SELECT id, password FROM users WHERE username = $1`
    const CREATE_USER = `INSERT INTO users(username, password) VALUES ($1, $2) RETURNING *`;
    const SELECT_USER_ID = `SELECT id, username FROM users WHERE id = $1`;
    const UPDATE_USER = `UPDATE users SET username = $1, password = $2 WHERE id = $3 RETURNING *`
    const DELETE_USER = `DELETE FROM users WHERE id = $1`
    const SEARCH_USER = `SELECT id, username FROM users WHERE username ILIKE $1`

    return {
        SELECT_USER_LIST, SELECT_USER, CREATE_USER, SELECT_USER_ID, UPDATE_USER, DELETE_USER, SEARCH_USER
    }
}

module.exports = UserQuery;