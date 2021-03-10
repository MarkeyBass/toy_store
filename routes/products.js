const express = require('express');
const router = express.Router();
const { productsCont } = require('../controllers/productsCont');

router.get('/', productsCont.sendProductPage);
router.get('/all_products', productsCont.getAllProducts);
router.get('/show_product_form', productsCont.showProductForm);
router.post('/', productsCont.addProduct);


module.exports = router;
