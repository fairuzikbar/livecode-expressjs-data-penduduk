const express = require('express');
const config = require('../config/config');
const errorRoute = require('./routes/error.routes');
const appRoute = require('./routes/index');
const jsonMiddleware = require('./middleware/json.middleware');
const errorMiddleware = require('./middleware/error.middleware');
const noRoute = require('./routes/no.routes');
require('dotenv').config();
const { port, host } = config();

const Server = () => {
    const app = express();
    app.use(jsonMiddleware);
    app.use(appRoute);
    app.use(errorRoute);
    app.use(errorMiddleware);
    app.use(noRoute);

    app.listen(port, host, () => {
        console.info(`App server running on port ${port}`)
    })
}

module.exports = Server;