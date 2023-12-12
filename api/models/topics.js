const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/films.json');

function readAllTopics() {
  const topics = parse(jsonDbPath);
  return topics;
}

function readOneTopic(id) {
  const idAsNumber = Number(id);
  const topics = parse(jsonDbPath);
  const indexOfTopicFound = topics.findIndex((topic) => topic.id === idAsNumber);
  if (indexOfTopicFound < 0) return undefined;

  return topics[indexOfTopicFound];
}

function createOneTopic(title, description) {
  const topics = parse(jsonDbPath);

  const createdTopic = {
    id: getNextId(),
    title,
    description,
  };

  topics.push(createdTopic);

  serialize(jsonDbPath, topics);

  return createdTopic;
}

function getNextId() {
  const topics = parse(jsonDbPath);
  const lastItemIndex = topics?.length !== 0 ? topics.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = topics[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

function deleteOneTopic(id) {
  const idAsNumber = Number(id);
  const topics = parse(jsonDbPath);
  const foundIndex = topics.findIndex((topic) => topic.id === idAsNumber);
  if (foundIndex < 0) return undefined;
  const deletedTopics = topics.splice(foundIndex, 1);
  const deletedTopic = deletedTopics[0];
  serialize(jsonDbPath, topics);

  return deletedTopic;
}

function updatePartiallyOneTopic(id, propertiesToUpdate) {
  const idAsNumber = Number(id);
  const topics = parse(jsonDbPath);
  const foundIndex = topics.findIndex((topic) => topic.id === idAsNumber);
  if (foundIndex < 0) return undefined;

  const updatedTopic = { ...topics[foundIndex], ...propertiesToUpdate };

  topics[foundIndex] = updatedTopic;

  serialize(jsonDbPath, topics);

  return updatedTopic;
}

function updateFullyOneTopicOrCreateOneTopic(id, topicProps) {
  const idAsNumber = Number(id, 10);
  const topics = parse(jsonDbPath);
  const indexOfTopicFound = topics.findIndex((topic) => topic.id === idAsNumber);

  if (indexOfTopicFound < 0) {
    const newFilm = { id: idAsNumber, ...topicProps };
    topics.push(newFilm);
    serialize(jsonDbPath, topics);
    return newFilm;
  }

  const topicPriorToChange = topics[indexOfTopicFound];

  const updatedTopic = {
    ...topicPriorToChange,
    ...topicProps,
  };

  topics[indexOfTopicFound] = updatedTopic;

  serialize(jsonDbPath, topics);

  return updatedTopic;
}

module.exports = {
  readAllTopics,
  readOneTopic,
  createOneTopic,
  deleteOneTopic,
  updatePartiallyOneTopic,
  updateFullyOneTopicOrCreateOneTopic,
};
