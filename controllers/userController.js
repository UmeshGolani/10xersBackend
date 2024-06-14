const {User} = require('../Models');

exports.getAllUsers = async (req, res) => {
    try {
        // if(req.user.role !== 'admin'){
        //     return res.status(403).json({message:'Forbidden'});
        // }
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}