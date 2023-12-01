const topics = [];

const readAllTopics = () => topics;

const addOneTopic = (topic) => {
    topics.push(topic)
};

export { readAllTopics, addOneTopic };