var models  = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  models.Smoothie.findAll().then(function(users) {
    res.send(users);
  });
});

router.post('/', function(req, res, next) {
  models.Smoothie.create(req.body).then(function() {
    res.send({'success': true});
  }, function(e) {
    res.send({'success': false, error: e});
  });
});

router.get('/:id', function(req, res, next) {
  models.Smoothie.findOne({
    where: {id: req.params.id}
  }).then(function(user) {
    res.send(user);
  }, function(e) {
    res.send({'success': false, error: e});
  });
});

router.put('/:id', function(req, res, next) {
  models.Smoothie.update(req.body, {
    where: {id: req.params.id}
  }).then(function() {
    res.send({'success': true});
  }, function(e) {
    res.send({'success': false, error: e});
  });
});

module.exports = router;