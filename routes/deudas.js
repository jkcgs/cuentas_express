var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/deudas', function(req, res, next) {
  var data = [
    {
      "nombre": "si"
    },
    {
      "nombre": "no"
    }
  ];

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(data));
});

module.exports = router;
