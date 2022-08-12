const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware')

const PeopleRoute = (peopleController) => {
    const {createPeople, listPeople, getPeople} = peopleController()
    router.post('/', authMiddleware, createPeople);
    router.get('/', authMiddleware, listPeople);
    router.get('/', authMiddleware, getPeople);
    return router;
}

module.exports = PeopleRoute;