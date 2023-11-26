const topics = [];

const readAllTopics = () => topics;

const addOneTopic = (topic) => {
    topics.push(topic)
    console.log(topics);
};

export { readAllTopics, addOneTopic };