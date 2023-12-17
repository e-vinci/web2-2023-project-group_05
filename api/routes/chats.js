const express = require('express');
const bodyParser = require('body-parser');
const {
  readAllMessages,
  createOneMessage,
} = require('../models/chats');

const router = express.Router();
// eslint-disable-next-line import/no-extraneous-dependencies

router.use(bodyParser.json());

// Middleware pour récupérer tous les messages
router.get('/', (req, res) => {
  console.log('Received GET request for /chats');
  const allMessages = readAllMessages();
  res.json(allMessages);
});

// Middleware pour ajouter un nouveau message
router.post('/', (req, res) => {
  console.log('Received POST request for /chats', req.body);
  const { username, message } = req.body;
  const newMessage = createOneMessage(username, message);
  res.json(newMessage);
});

module.exports = router;
