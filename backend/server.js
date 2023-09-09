const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MySQL
const db = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'my_database'
});

// Register route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.execute('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
  res.json({ success: true, message: 'User registered' });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const [rows] = await db.execute('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);
  if (rows.length > 0) {
    res.json({ success: true, message: 'Login successful' });
  } else {
    res.json({ success: false, message: 'Invalid credentials' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
