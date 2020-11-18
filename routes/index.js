var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/admin', function(req, res, next) {
  res.render('layout', { title: 'Express test' }); 
});

// render add product form
router.get('/create-form', function (req, res, next) {
  res.render('add_product', { title: 'Create Product' });
});


module.exports = router;
