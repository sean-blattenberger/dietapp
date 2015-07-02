var express = require('express');
var router = express.Router();
var request = require("request");
var Firebase = require('firebase');
var fbRef = new Firebase("https://my-dietapp.firebaseio.com/");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/user', function(req, res, next) {
  fbRef.once("value", function(snap) {
    res.json( { locations: snap.val() });
  })
});

router.post("/user", function(req, res, next){
  console.log(this);
  console.log(req.body);
  //  var newLocation = req.body[]
  //  var newLocation = _.map(fake)
  var newUser = req.body.usersList;
  fbRef.push("test", function(err) {
    res.json(newUser);
  });

})

module.exports = router;


