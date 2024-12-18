const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const app = express();
connectDB();
app.use(express.json());
app.use('/api/products', productRoutes);
app.listen(5000, () => console.log('서버가 http://localhost:5000에서 실행 중입니다.'));

// This content can be zipped into a complete backend folder for deployment.
