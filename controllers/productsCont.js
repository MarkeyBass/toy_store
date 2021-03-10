const path = require('path');
const { SqlService } = require('../services/sqlService');

class ProductsCont {
  constructor () {
    this.sqlService = new SqlService();
  }

  sendProductPage = (req, res) => {
    res.render("products", { title: "Products" })
  };

  getAllProducts = (req, res) => {
    this.sqlService.selectAllProducts((err, products) => {
        if(err) {
          console.log(err);
          res.status(400).send(`<h1>Can't get products information: Status: 400</h1>`)
        }
        console.log('successfull GET req was made from PRODUCTS');
        res.render('all_products', {
          title: "Users",
          products
        });
    });
  };

  showProductForm = (req, res) => {
    console.log("hited /users/show_product_form rout")
    res.render('show_product_form', { title: "Products" });
  };

  addProduct = (req, res) => {
    this.sqlService.addProduct(req.body, (err, msg) => {
      if(err) {
        console.log(err);
        res.status(400).send(`<h1>Unable to post PRODUCTS data: Status: 400</h1>`)
      } else {
          res.redirect(301, "products/all_products")
          // .json({
          // msg: "PRODUCT added successfully...",
          // status: 200,
        // });
      }
    });
  
  };
}


module.exports = {
  productsCont: new ProductsCont()
}

