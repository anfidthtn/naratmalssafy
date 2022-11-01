const express = require('express');
const router = express.Router();
const genFont = require('../generateTTF');

router.get('/makefont/:fontname', (req, res) => {
    genFont(req.params.fontname);
    res.end();
});

module.exports = router;