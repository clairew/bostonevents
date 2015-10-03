var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {

    var db = req.db;	
    var collection = db.get('users');
	console.log(collection);
    collection.find({},{},function(e,docs){
    	console.log("asdfasd "+e);
        res.render('test', {
            "title": "testPage"
        });
    });
    console.log("reached here");
    /*
    res.render('test', {
        "title": "testPage"
    });*/
});

module.exports = router;
