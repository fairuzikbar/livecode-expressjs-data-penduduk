const express = require('express');
const router = express.Router();

router.use('/error', (req, res) =>{
    res.status(500).json({
        code : res.statusCode,
        message : `Oops, Internal server error!`
    });
});

module.exports = router;