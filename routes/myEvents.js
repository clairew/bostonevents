var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('myEvents', {
        "title": "My Events"
    });
});

module.exports = router;
