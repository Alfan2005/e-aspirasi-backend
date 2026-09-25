const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route Utama
app.get('/', (req, res) => {
  res.json({
    message: 'Selamat datang di API Backend E-Aspirasi!',
    status: 'Server Berjalan Lancar'
  });
});

// Jalankan Server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});