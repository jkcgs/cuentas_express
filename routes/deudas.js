var express = require('express');
var router = express.Router();

module.exports = function(io) {
  io.on('connection', function (socket) {
    io.emit('this', { will: 'be received by everyone'});
  });

  var Deuda = require("../models/deuda.js");
  var mongoose = require('mongoose');
  mongoose.Promise = global.Promise;

  /* Listar deudas */
  router.get('/deudas/get', function(req, res, next) {
    var query = Deuda.find();

    query.exec(function(err, data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    });
  });

  /* Editar una deuda */
  router.post('/deudas/edit/:id', function(req, res, next) {
    var deudaId = req.params.id;

    Deuda.findById(deudaId, function(err, doc){
      if (err) {
        return res.status(500).json({error: err});
      }

      if (!doc){
        return res.status(404).json({error: 'Deuda no encontrada'});
      }

      var updated = req.body.datosDeuda;
      Object.assign(doc, updated);

      doc.save(function(err) {
        if (err) {
          return res.status(500).json({error: err});
        }

        res.json(doc);
      });
    });
  });

  /* Borrar una deuda */
  router.get('/deudas/delete/:id', function(req, res, next) {
    var query = Deuda.findOneAndRemove(req.params.id);

    query.exec(function(err, doc, result){
      if (err) {
        return res.status(500).json({error: err});
      }

      if (!doc){
        return res.status(404).json({error: 'Deuda no encontrada'});
      }

      res.json({"success": true});
    });
  });

  /* Agregar deuda */
  router.post('/deudas/add', function(req, res, next) {
    var nueva = new Deuda({
      "nombre": req.body.nombre,
      "descripcion": req.body.descripcion,
      "fecha_agregado": new Date(),
      "fecha_pagado": null,
      "fecha_pagar": req.body.fecha_pagar,
      "monto": req.body.monto,
      "usuario": null
    });

    nueva.save(function(err, doc){
      if(err) {
        return res.status(500).json({
          error: err
        });
      }

      return res.json(doc);
    });
  });


  return router;
};
