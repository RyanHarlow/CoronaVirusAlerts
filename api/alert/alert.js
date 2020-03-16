const express = require('express');
const router = express.Router();
const alert = require('../db/alert');

router.post('/', (req, res) => {
    alert.createNewAlert(req, res);
});

module.exports = router;