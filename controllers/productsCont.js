const path = require('path');
const fs = require('fs'); 

const sendProductPage = (req, res) => {
  res.status(200).sendFile(path.join(__dirname,'..' ,'public', 'products.html'));
};

const getAllProducts = (req, res) => {
  fs.readFile(path.join(__dirname, '..','models', 'products.json'), 'utf-8',(err, data) => {
    if(err) console.log(err);
    console.log(data);
    res.json(JSON.parse(data));
  });
};

// post a product
const addProduct = (req, res) => {
  console.log(req.body)
  let dataArr = [];
  fs.readFile(path.join(__dirname, '..','models', 'products.json'), 'utf-8' ,(err, data) => {
    if(err) console.log(err);
    console.log(data);
    dataArr = JSON.parse(data);
    dataArr.push(req.body);
    console.log(dataArr);
    
    fs.writeFile(path.join(__dirname, '..','models', 'products.json'), JSON.stringify(dataArr) , (err, data) => {
      if(err) console.log(err);
    });
  });
};

module.exports = {
  sendProductPage,
  getAllProducts,
  addProduct
}