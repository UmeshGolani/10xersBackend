const express = require('express');

const {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} = require('../controllers/productController');

const authenticate = require('../middlewares/authenticate');
const router = express.Router();

router.post('/', createProduct);
router.get('/',getAllProducts);
router.get('/:id',getProductById);
router.put('/:id', updateProduct);
router.delete('/:id',authenticate,deleteProduct);

module.exports = router;