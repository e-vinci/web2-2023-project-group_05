import { readAllTopics, deleteOneTopic, updateOneTopic } from '../../model/topic';

const TopicView = async () => {
  const viewTopic = `
  <section class="hero">
  <div class="hero-text">
  <div id="topicWrapper"></div>
  </div>
  </section>
  `;

  const main = document.querySelector('main');
  main.innerHTML = viewTopic;

  const topicWrapper = document.querySelector('#topicWrapper');

  const topics = await readAllTopics();

  const topicAsHtmlTable = getHtmlTopicTableAsString(topics);

  topicWrapper.innerHTML = topicAsHtmlTable;

  attachEventListeners();
};

function getHtmlTopicTableAsString(topics){
  if(topics?.length === undefined || topics.length === 0){
    return "<p class=p-5> Pas de sujets pour l'instant : (</p>";
  }
  const htmlTopicTable = `
  <div id="searchForm">
  <form action="/results" data-uri="/results">
    <input type="text" id="mySearch" name="search" placeholder="search for a category/subject" required />
    <input type="submit" name="submit" id="submit" value"Search" />
  </form>
</div>
<div class="table-responsive p-5">
  <table class="table">
  <thead>
  <tr>
  <th scope = "col">Titre</th>
  <th scope = "col">Description</th>
  </tr>
  </thead>
  <tbody>
    ${topics
      .map(
        (element) => `

        <tr>

          <td class="fw-bold text-info" contenteditable="true">${element.title}</td>
          <td class="text-info" contenteditable="true">${element.description}</td>
          <td>
            <button type="button" class="btn btn-info delete" data-element-id="${element.id}">Supprimer</button>
          </td>
          <td>
            <button type="button" class="btn btn-info update" data-element-id="${element.id}">Sauvegarder</button>
          </td>
        </tr>
        <span class="error"></span>

        `,
      )
      .join('')}
      </tbody></table>`;
    
    return htmlTopicTable;
}

function attachEventListeners() {
  const topicWrapper = document.querySelector('#topicWrapper');
  const span = document.querySelector('.error');

  topicWrapper.querySelectorAll('.delete').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;
      
      try {
      await deleteOneTopic(elementId);
      TopicView();
    } catch (error) {
      console.error(error);
      
      span.innerHTML = "error.message"; 
    }

    });
  });

  topicWrapper.querySelectorAll('.update').forEach((button) => {
    button.addEventListener('click', async (e) => {
      const { elementId } = e.target.dataset;

      const topicRow = e.target.parentElement.parentElement;

      const newTopicData = {
        title: topicRow.children[0].innerText,
        description: topicRow.children[1].innerText
      };
      await updateOneTopic(elementId, newTopicData);
      TopicView();
    });
  });
}

export default TopicView;