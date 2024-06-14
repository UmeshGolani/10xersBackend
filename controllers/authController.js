const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../Models');

exports.signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ email, password: hashedPassword, role });
        res.status(200).json(user);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });

        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.status(401).json({ message: "Invalid Credentials" });
        }

        const token = jwt.sign({ userId: user.id, role: user.role }, 'secret', { expiresIn: '1h' });

        const admin_id = user.role === "admin" ? user.id : "";
       
        // Exclude password before sending user data
        const { password: _, ...userWithoutPassword } = user.toJSON();

        res.json({ token, admin_id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
