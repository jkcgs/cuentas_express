var express = require('express');
var router = express.Router();

module.exports = function(io) {
  io.on('connection', function (socket) {
    io.emit('this', { will: 'be received by everyone'});
  });

  var Deuda = require("../models/deuda.js");
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;

  /* GET users listing. */
  router.get('/deudas/get', function(req, res, next) {
    var query = Deuda.find();

    query.exec(function(err, data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
  });

  /* GET users listing. */
  router.get('/deudas/delete/:id', function(req, res, next) {
    var query = Deuda.findOneAndRemove(req.params.id);
    query.exec(function(err, doc, result){
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({"lel": result}));
    });
    
  });

  return router;
};
