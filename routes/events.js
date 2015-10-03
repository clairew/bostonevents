var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    var db = req.db;	
    var collection = db.get('events');

    collection.find({},{},function(e,docs){
        res.render('events', {
            "title": "Search Events",
            "events": docs
        });
    });
});

module.exports = router;
