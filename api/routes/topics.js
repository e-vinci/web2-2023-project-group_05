const express = require('express');
const { authorize } = require('../utils/auths');
const {
  readAllTopics,
  readOneTopic,
  createOneTopic,
  deleteOneTopic,
  updatePartiallyOneTopic,
  updateFullyOneTopicOrCreateOneTopic,
} = require('../models/topics');

const router = express.Router();

// Read all the topics
router.get('/', (req, res) => {
  const allTopics = readAllTopics();
  if (allTopics === undefined) return res.sendStatus(400);
  return res.json(allTopics);
});

// Read a topics from its id in the menu
router.get('/:id', (req, res) => {
  const foundTopic = readOneTopic(req?.params?.id);
  if (!foundTopic) return res.sendStatus(404);
  return res.json(foundTopic);
});

// Create a topic
router.post('/', authorize, (req, res) => {
  const title = req?.body?.title?.trim()?.length !== 0 ? req.body.title : undefined;
  const description = req?.body?.description?.trim()?.length !== 0
    ? req.body.description : undefined;
  const category = req?.body?.categorie.trim()?.length !== 0
    ? req.body.categorie : undefined;
  const user = req?.body?.user.trim()?.length !== 0 ? req.body.user : undefined;

  if (!title || !description || !category || !user) {
    return res.sendStatus(400);
  }
  const createdTopic = createOneTopic(title, description, category, user);
  return res.json(createdTopic);
});

// Delete a topic
router.delete('/:id', authorize, (req, res) => {
  const deletedTopic = deleteOneTopic(req?.params?.id);
  if (!deletedTopic) return res.sendStatus(404);
  return res.json(deletedTopic);
});

// Update one or more properties of a topic identified by its id
router.patch('/:id', authorize, (req, res) => {
  const title = req?.body?.title;
  const description = req?.body?.description;
  const category = req?.body?.categorie;

  if (
    !req.body
    || (title !== undefined && !title.trim())
    || (description !== undefined && !description.trim())
    || (category !== undefined && !category.trim())
  ) return res.sendStatus(400);

  const updatedFilm = updatePartiallyOneTopic(req?.params?.id, req?.body);

  if (!updatedFilm) return res.sendStatus(404);

  return res.json(updatedFilm);
});

// Update a topic only if all properties are given
// or create it if it does not exist and the id is not existant
router.put('/:id', authorize, (req, res) => {
  const title = req?.body?.title;
  const link = req?.body?.description;
  const category = req?.body?.category;

  if (
    !req.body
    || !title
    || !title.trim()
    || !link
    || !link.trim()
    || !category
    || !category.trim()
  ) return res.sendStatus(400);

  const updatedFilmOrNewFilm = updateFullyOneTopicOrCreateOneTopic(req?.params?.id, req?.body);
  return res.json(updatedFilmOrNewFilm);
});

module.exports = router;
/*
**************************************************************************************
*    Title: <
  router.get,
  router.get(/:id),
  router.post,
  router.delete,
  router.patch,
  router.put,
  >
*    Author: <Baroni>
*    Date: <15/12/2023>
*    Code version: <code version>
*    Availability: <https://github.com/e-vinci/js-exercises/tree/main>

***************************************************************************************
*/
