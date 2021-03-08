const path = require('path');
const { FileService } = require('../services/fileService');

class ProductsCont {
  constructor() {
    this.fileService = new FileService();
  }

  sendProductPage = (req, res) => {
    res.status(200).sendFile(path.join(__dirname,'..' ,'public', 'products.html'));
  };
  
  getAllProducts = (req, res) => {
    this.fileService.readFromFile(path.join(__dirname, '..','models', 'products.json'), (err, data) => {
      if(err) {
        console.log(err);
        res.status(400).send(`<h1>Can't get the data: Status: 400</h1>`);
      } else {
        console.log('successfull GET req was made from Products');
        res.send(data);
      }
    });
  };
  
  // post a product
  addProduct = (req, res) => {
    this.fileService.writeToJsonFile(path.join(__dirname, '..','models', 'products.json'), req.body, (err, data) => {
      if(err) {
        console.log(err);
        res.status(400).send(`<h1>Unable to post the data: Status: 400</h1>`);
      } else {
        res.status(200).json({
          msg: "Product added successfully...",
          status: 200,
        });
      }
  
    })
  }
}

module.exports = {
  productsCont: new ProductsCont()
}
