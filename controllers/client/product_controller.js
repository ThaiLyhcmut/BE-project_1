module.exports.index = (req,res) => {
  res.render("client/pages/products/index", {
    Pagetitle: "Trang danh sach san pham"
  })
}