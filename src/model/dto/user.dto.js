const User = require("../user")

//DTO => Data Transfer Object
const UserDto = (result, index = 0) => {
    return User (
        result.rows[index].id,
        result.rows[index].username
    )
}

module.exports = UserDto;