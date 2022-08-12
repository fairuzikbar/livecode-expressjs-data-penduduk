const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const DistRoute = (districtController) => {
    const {createDist, listDist, getDist} = districtController()
    router.post('/', authMiddleware, createDist);
    router.get('/', authMiddleware, listDist);
    router.get('/:id', authMiddleware, getDist);
    router.get('/regency/:id', authMiddleware, getDist);
    return router;
}

module.exports = DistRoute;