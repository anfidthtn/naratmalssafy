const express = require('express');
const router = express.Router();
const genFont = require('../generateTTF');

router.get('/makefont', (req, res) => {
    genFont(req.query.fontname);
    let seq = req.query.fontseq;
    res.json(seq);
});

module.exports = router;