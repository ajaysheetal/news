const { response } = require('express');
var express = require('express');
var router = express.Router();
const categoryService = require('../controller/category');


// render add category form
router.get('/add-category', function (req, res, next) {
  res.render('pages/category/add_category', { title: 'Category' });
});


//  save category
router.post('/save-category', function (req, res, next) {
  //console.log(req.body.category);
  const response = categoryService.saveCategory(req, res);
  res.render('pages/category/category_list', { title: 'Category' });
});


// render List category 
router.get('/category-list', function (req, res, next) {
  const responsedata = categoryService.listCategory(req, res);
 console.log( "----->>>",responsedata);
 responsedata.setHeader('Content-Type', 'text/html');

  res.render('pages/category/category_list', { title: 'Category' ,products: responsedata.json()});
});


module.exports = router;
