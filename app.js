const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const sequelize = require('./Config/db');
const authRoutes = require('./Routes/authRoutes');
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 8001;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

sequelize.sync()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})
.catch(err => {
    console.error(err);
})
