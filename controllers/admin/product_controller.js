const Product = require("../../models/product_model")


module.exports.index = async (req,res) => {
  const find = {
    deleted: false,
  }

  if(req.query.status) {
    find.status = req.query.status
  }
  if(req.query.keyword) {

    const regex = new RegExp(req.query.keyword, "i")
    find.title = regex
  }

  let limitItems = 4;
  let page = 1;
  if(req.query.page){
    page = parseInt(req.query.page)
  }
  if(req.query.limit){
    limitItems = parseInt(req.query.limitItems)
  }
  const skip = (page - 1)*limitItems

  const products = await Product.find(find).limit(limitItems).skip(skip)
  const total_products = await Product.countDocuments(find)
  const total_page = parseInt((total_products + limitItems - 1)/limitItems)
  res.render("admin/pages/products/index", {
    Pagetitle: "Trang danh sach san pham",
    products: products,
    total_page: total_page,
    currentPage: page
  })
  // res.json({
  //   products: products,
  //   total_page: total_page,
  //   Pagetitle: "Trang danh sach san pham"
  // })
}