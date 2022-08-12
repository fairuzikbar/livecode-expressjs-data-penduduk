const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const ProvRoute = (provController) => {
    const {createProv, listProv, getProv} = provController()
    router.post('/', authMiddleware, createProv);
    router.get('/', authMiddleware, listProv);
    router.get('/:id', authMiddleware, getProv);
    return router;
}

module.exports = ProvRoute;