const express = require('express');
const jwt = require('jsonwebtoken');
const loginRouter = express.Router();

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

const secretKey = process.env.SECRET_KEY || 'default_secret';

loginRouter.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed: Invalid credentials' });
  }

  const accessToken = jwt.sign(user, secretKey);
  res.json({ accessToken });
});

module.exports = loginRouter;