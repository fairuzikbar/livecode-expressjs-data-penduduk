const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const UserRoute = (userController) => {
    const {createUser, listUser, getUser, updateUser, deleteUserData} = userController()
    router.get('/', createUser);
    router.get('/', authMiddleware, listUser);
    router.get('/:id', authMiddleware, getUser);
    router.put('/:id', authMiddleware, updateUser);
    router.delete('/:id', authMiddleware, deleteUserData);
    return router;
}

module.exports = UserRoute;