const jwt = require('jsonwebtoken');
const {User} = require('../Models');

const authenticate = async (req, res, next) => {
const header = req.headers['authorization'];
if(!header) return res.status(401).json({message : 'Unauthorized'});
const token = header.split(' ')[1];
try {
    const decoded = jwt.verify(token, 'secret');
    const user = await User.findByPk(decoded.userId);
    if(!user) return res.status(401).json({message : 'Unauthorized'});
    req.user = decoded;
    next();
} catch (error) {
    res.status(401).json({message :'Unauthorized'});
}
};

module.exports = authenticate;