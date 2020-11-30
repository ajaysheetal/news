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
router.get('/category-list', async function  (req, res) {
  const listdata =  await categoryService.listCategory();
  //console.log(responsedata);
  //console.log(listdata.result);

  res.render('pages/category/category_list', {title: 'Category List',listdata:listdata.result });
});


module.exports = router;
