const express = require('express')
const router = express.Router();
const config = require('../../config.json');
var axios = require('axios');
const Change = require("../../models/changes")

router.post('/new', function (req, res, next) {
    var change = new Change(req.body)
    change.save(newChange=>{res.send(newChange)})
});

module.exports = router;