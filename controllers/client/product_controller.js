const Product = require("../../models/product_model")

module.exports.index = async (req,res) => {
  const products = await Product.find({
    deleted: false
  })
  console.log(products)
  res.render("client/pages/products/index", {
    Pagetitle: "Trang danh sach san pham",
    products: products
  })
  // res.json(products)
}