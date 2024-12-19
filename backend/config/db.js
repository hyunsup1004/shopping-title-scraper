const mongoose = require('mongoose');

// MongoDB 연결
const connectDB = async () => {
  try {
     const conn = await mongoose.connect('mongodb://127.0.0.1:27017/stormcredit', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1); // 실패 시 종료
  }
};

module.exports = connectDB;
