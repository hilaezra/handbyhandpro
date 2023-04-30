const express = require('express');

const router = express.Router();

router.post('/login', (req, res) => {
    return res.status(200).send(req.body)
});

router.post('/logout', (req, res) => {
    console.log(req.body)
});

module.exports = router;