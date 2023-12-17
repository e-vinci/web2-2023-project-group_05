const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/chats.json');

function readAllMessages() {
  const messages = parse(jsonDbPath);
  return messages;
}

function createOneMessage(username, message) {
  const messages = parse(jsonDbPath);

  const currentDate = new Date();
  const formattedDate = `${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}`;

  const newMessage = {
    username,
    message,
    timestamp: formattedDate,
  };

  messages.push(newMessage);

  serialize(jsonDbPath, messages);

  return newMessage;
}

module.exports = {
  readAllMessages,
  createOneMessage,
};
