
const categoryModel = require('../model/category');
const category = {};





category.saveCategory = async (req, res) => {
    const categoryData = {};
    categoryData.name = req.body.category;
    categoryData.status = 1;
    categoryData.createdDate = Date();
    const createdCategory = new categoryModel(categoryData);
    console.log(categoryData);
    // return

    try {
        const result = await createdCategory.save();

        return res.json({
            success: true,
            result: result,
            message: "Category Saved Successfully.."
        })
    } catch (err) {
        return res.json({
            success: false,
            message: "Category Data not Saved Successfully !!"
        })
    }
}




category.listCategory = async (req, res) => {
    

    try {
        const result = await categoryModel.find({});
       // console.log('test');
       // console.log(result);

        return res.json({
            success: true,
            result: result,
            message: "Category listed Successfully.."
        })
    } catch (err) {
        return res.json({
            success: false,
            message: "Category Data not listrd Successfully !!"
        })
    }
}






module.exports = category;
