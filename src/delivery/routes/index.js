const express = require('express');
const router = express.Router();
const db = require('../../config/db');

const UserRepository = require('../../repository/user.repository');
const UserService = require('../../service/user.service');
const userRouter = require('./user.routes');
const UserController = require('../controller/user.controller');

const ProvinceRepository = require('../../repository/province.repository');
const ProvService = require('../../service/province.service');
const provRouter = require('./province.routes');
const ProvController = require('../controller/province.controller');

const RegencyRepository = require('../../repository/regency.repository');
const RegencyService = require('../../service/regency.service');
const regRouter = require('./regency.routes');
const RegencyController = require('../controller/regency.controller');

const DistrictRepository = require('../../repository/district.repository');
const DistrictService = require('../../service/district.service');
const distRouter = require('./district.routes');
const DistrictController = require('../controller/district.controller');

const PeopleRepository = require('../../repository/people.repository');
const PeopleService = require('../../service/people.service');
const peopleRouter = require('./people.routes');
const PeopleController = require('../controller/people.controller');

const AuthenticationService = require('../../service/authentication.service');
const AuthenticationController = require('../controller/authentication.controller');
const authRouter = require('./auth.routes');

const userService = (req, res, next) => {
    req.service = UserService(UserRepository(db));
    next()
}

const provService = (req, res, next) => {
    req.service = ProvService(ProvinceRepository(db));
    next()
}

const regencyService = (req, res, next) => {
    req.service = RegencyService(RegencyRepository(db));
    next()
}

const districtService = (req, res, next) => {
    req.service = DistrictService(DistrictRepository(db));
    next()
}

const peopleService = (req, res, next) => {
    req.service = PeopleService(PeopleRepository(db));
    next()
}

const authService = (req, res, next) => {
    req.service = AuthenticationService(UserService(UserRepository(db)));
    next()
}

router.use('/init', userService, userRouter(UserController));

router.use('/province', provService, provRouter(ProvController));

router.use('/regency', regencyService, regRouter(RegencyController));

router.use('/district', districtService, distRouter(DistrictController));

router.use('/people', peopleService, peopleRouter(PeopleController));

router.use('/auth', authService, authRouter(AuthenticationController));

module.exports = router;