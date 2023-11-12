import Navigate from '../Router/Navigate';
import { addOneTopic } from '../../model/topic';

const Topic = () => {

    const addTopic = `
    <h3>Reglement :</h3>
  <button class="buttonForRule">Cliquer ici pour afficher le réglement</button>
  <div class="rule">
  </div>
  <form class="px-5">
    <div class="mb-3">
      <label for="nameTopic">Enter le nom pour le sujet</label>
      <input
        class="form-control"
        type="text"
        name="title"
        id="title"
        required
      />
    </div>
    <div class="mb-3">
      <label for="description">Entrez une brève description du sujet</label>
        <textarea
            class="form-control"
            name="description"
            id="description"
            required
        ></textarea>
    </div>
    <div class="mb-3">
      <label for="imageTopic">ajouter une image representant le sujet</label>
      <input
        class="form-control"
        type="file"
        name="image"
        id="image"
        required
      />
    </div>
    <input type="submit" class="btn btn-primary" value="Add Topic" />
</form>  
</div>
  <script src="../../src/addTopic.js"></script>
    `;
  
      const main = document.querySelector('main');
      main.innerHTML = addTopic;

      const myForm = document.querySelector('form');
      const title = document.querySelector('#title');
      const description = document.querySelector('#description');
      const image = document.querySelector('#image');

      myForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const topicToBeCreated = {
          title: title.value,
          description: description.value,
          image: image.value,
        };
    
        addOneTopic(topicToBeCreated);
        Navigate('/topic/add');
      });
    };

export default Topic;