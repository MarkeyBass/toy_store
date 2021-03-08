const express = require('express');
const router = express.Router();
const { productsCont } = require('../controllers/productsCont');

router.get('/', productsCont.sendProductPage);
router.get('/all-products', productsCont.getAllProducts);
router.post('/add-product', productsCont.addProduct);

module.exports = router;
