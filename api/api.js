const express = require('express')
const router = express.Router()
const alert = require('./alert/alert')


router.get('/', (req, res) => {
    res.send('api route'); 
})

router.use('/alert', alert);

module.exports = router;