const express = require('express');
const {
  register, login, readAllUsers, deleteAllUsers,
} = require('../models/users');
const { isAdmin } = require('../utils/auths');

const router = express.Router();

// Read all users
router.get('/', (req, res) => {
  const users = readAllUsers();
  res.json(users);
});

/* Register a user */
router.post('/register', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Request

  const authenticatedUser = await register(username, password);

  if (!authenticatedUser) return res.sendStatus(409); // 409 Conflict

  return res.json(authenticatedUser);
});

/* Login a user */
router.post('/login', async (req, res) => {
  const username = req?.body?.username?.length !== 0 ? req.body.username : undefined;
  const password = req?.body?.password?.length !== 0 ? req.body.password : undefined;

  if (!username || !password) return res.sendStatus(400); // 400 Bad Reques

  const authenticatedUser = await login(username, password);

  if (!authenticatedUser) return res.sendStatus(401); // 401 Unauthorized

  return res.json(authenticatedUser);
});

// Delete all the users excpet the admin
router.delete('/', isAdmin, (req, res) => {
  const deleted = deleteAllUsers();
  return res.json(deleted);
});

module.exports = router;

/*
**************************************************************************************
*    Title: <
  router.get,
  router.post(/register),
  router.post(/login),
  >
*    Author: <Baroni>
*    Date: <15/12/2023>
*    Code version: <code version>
*    Availability: <https://github.com/e-vinci/js-exercises/tree/main>

***************************************************************************************
*/
