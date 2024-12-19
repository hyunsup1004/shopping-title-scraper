const express = require('express');
const connectDB = require('./config/db'); // MongoDB 연결 파일 가져오기

const app = express();

// MongoDB 연결 실행
connectDB();

app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
