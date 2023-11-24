import Navigate from '../Router/Navigate';
import { readAllTopics } from '../../model/topic';

const TopicView = () => {
  const viewTopic = `<div id="topicWrapper"></div>`;

  const main = document.querySelector('main');
  main.innerHTML = viewTopic;

  const topicWrapper = document.querySelector('#topicWrapper');

  const topics = readAllTopics();

  const topicAsHtmlTable = getHtmlTopicTableAsString(topics);

  topicWrapper.innerHTML = topicAsHtmlTable;

  Navigate('/topic/view');
};

function getHtmlTopicTableAsString(topics){
  if(topics?.length === undefined || topics.length === 0){
    return '<p class=p-5> No topics yet : (</p>';
  }
  let htmlTopicTable = `<div class="table-responsive p-5">
  <table class="table">
  <thead>
  <tr>
  <th scope = "col">Title</th>
  <th scope = "col">Description</th>
  <th scope = "col">Image </th>
  </tr>
  </thead>
  <tbody>`;


topics.forEach((element)=> {
  htmlTopicTable += `
  <tr>
    <td><a href="${element.link}" target="_blank"">${element.title}</a></td>
    <td>${element.description}</td>
    <td>${element.budget}</td>
    </tr>`;
});

htmlTopicTable +='</tbody></table>';

return htmlTopicTable;
}

export default TopicView;
