const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const RegRoute = (regencyController) => {
    const {createReg, listReg, getReg} = regencyController()
    router.post('/', authMiddleware, createReg);
    router.get('/', authMiddleware, listReg);
    router.get('/:id', authMiddleware, getReg);
    router.get('/province/:id', authMiddleware, getReg);
    return router;
}

module.exports = RegRoute;