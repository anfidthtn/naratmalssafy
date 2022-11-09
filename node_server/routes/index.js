const express = require('express');
const router = express.Router();
const genFont = require('../generateTTF');

router.post('/nodeexpress/makefont', (req, res) => {
    console.log(req.body)
    genFont(req.body.fontName);
    let seq = req.body.fontseq;
});

module.exports = router;