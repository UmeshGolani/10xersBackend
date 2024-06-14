const {Product, User} = require('../Models');

exports.createProduct = async (req, res) => {
    try {
        // if(req.user.role !== 'admin'){
        //     return res.status(403).json({message: 'Forbidden'});
        // }
        const product = await Product.create({...req.body});
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({error: error.message});        
    }
}

exports.getAllProducts = async (req, res) => {
    try {
        const { admin_id } = req.query;
        const where = {};
        if (admin_id) {
            where.admin_id = admin_id;
        }
        const products = await Product.findAll({ where });
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).json({message:'Product not found'});
        }
        res.json(product);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

exports.updateProduct = async (req, res) => {
    // console.log(req.body);
    try {
        const product = await Product.findByPk(req.params.id);
        if(!product){
            return res.status(404).json({message : 'Product not found'});
        }
        await product.update(req.body);
        res.json(product);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        if(req.user.role !== 'admin'){
            return res.status(403).json({message:'Forbidden'});
        }
        const product = await Product.findByPk(req.params.id);
        if(!product){
            return res.status(404).json({message:'Product not found'});
        }
        await product.destroy();
        res.status(204).end();
    } catch (error) {
        res.status(500).json({error:error.message});
        
    }
}