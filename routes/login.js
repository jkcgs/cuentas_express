var express = require('express');
var router = express.Router();
var Usuario = require("../models/usuario.js");

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

router.post('/login', function(req, res) {
  var query = Usuario.findOne({username: req.body.username, password: req.body.password});

  res.setHeader('Content-Type', 'application/json');
  query.exec(function(err, user){
    if(!!user) {
      console.log("User logged in: " + req.body.username);
    }
    
    res.send(JSON.stringify({"success": !!user}));
  });
});

module.exports = router;
