const jwt = require('jsonwebtoken');
const { s, m } = require('time-convert');
const dotenv = require('dotenv');

const AuthenticationService = (userService) => {
    dotenv.config();
    const { findUserByUsernamePassword } = userService
    
    const login = async (payload) => {
        const user =
            await findUserByUsernamePassword(
                payload.username,
                payload.password
            );
        if(!user) return `Invalid account!`;
        //TOKEN
        //dari const {TOKEN_SECRET,...} sampai di atas return token, baiknya dibuat method sendiri biar clean
        const { TOKEN_SECRET, TOKEN_EXPIRATION, TOKEN_ALGORITHM } = process.env;
        const payloadUser = { id : user.id, email : user.email };
        const algorithm = TOKEN_ALGORITHM;
        const key = TOKEN_SECRET;
        const expiresIn = s.from(m)(TOKEN_EXPIRATION);
        // Urutan: 
        // (1) payload yang ingin ditampilan
        // (2) token secret untuk verify signature
        // (3) { expiresIn } -> Untuk masa hidup token, bisa dari (ms, s, m, h, d) dari npm time-convert
        // (4) Callback
        const token = jwt.sign(
            payloadUser, key,
            { expiresIn, algorithm },
            null
            );
        return token;
    }
    
    const logout = () => {};
    
    const forgotPassword = () => {};

    return {
        login, logout, forgotPassword
    }
}

module.exports = AuthenticationService