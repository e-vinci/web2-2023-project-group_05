import Navigate from '../Router/Navigate';
import { addOneTopic } from '../../model/topic';

const TopicAdd = () => {
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
    `;

  const main = document.querySelector('main');
  main.innerHTML = addTopic;

  const myForm = document.querySelector('.px-5');

  const title = document.querySelector('#title');
  const description = document.querySelector('#description');
  const image = document.querySelector('#image');

  const buttonRule = document.querySelector('.buttonForRule');

  let messageIsVisible = false;
  const messageRule = document.querySelector('.rule');
  const message = `Réglement pour la création d'un sujet : 

      Règlement de Création de Sujets

        Nom du Sujet :
        Veuillez attribuer un titre approprié, clair et pertinent au sujet. Évitez les titres trompeurs ou sensationnalistes. Ils doivent être en rapport avec le contenu du sujet et respecter les normes de décence et de courtoisie.

        Contenu Inapproprié :
        Tout sujet, commentaire ou contenu associé ne doit pas promouvoir la haine, le racisme, la discrimination, la violence, ou enfreindre de quelque manière que ce soit les lois en vigueur. Le contenu offensant ou inapproprié sera supprimé.

        Respect de la Communauté :
        Respectez les autres membres de la communauté. Les discussions animées et les opinions divergentes sont autorisées, mais elles doivent rester respectueuses et constructives.

        Droits d'Auteur :
        Veillez à respecter les droits d'auteur. Ne publiez pas de contenu sans l'autorisation nécessaire ou sans mentionner la source si requis.

        Publicité et Spam :
        Évitez toute forme de spam ou de publicité non sollicitée. La promotion excessive de produits, services ou liens externes est interdite.

        Sujets Répétitifs :
        Avant de créer un nouveau sujet, assurez-vous qu'un sujet similaire n'existe pas déjà. Évitez de créer des sujets redondants ou dupliqués.

        Titres et Contenu Sensationnalistes :
        Les titres et le contenu ne doivent pas être exagérés ou utilisés à des fins sensationnalistes. Restez fidèle au sujet et évitez les informations fausses ou trompeuses.

        Modération et Respect des Règles :
        Tout sujet ne respectant pas ces règles peut être édité, déplacé ou supprimé par l'équipe de modération. En cas de non-respect répété, des mesures disciplinaires pourront être prises`;

  buttonRule.addEventListener('click', () => {
    if (messageIsVisible) {
      messageRule.innerHTML = ''; // Efface le contenu du message
      messageIsVisible = false; // Change l'état à "non visible"
    } else {
      messageRule.innerHTML = message; // Affiche le message
      messageIsVisible = true; // Change l'état à "visible"
    }
  });

  myForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const topicToBeCreated = {
      title: title.value,
      description: description.value,
      image: image.value,
    };
    console.log(topicToBeCreated);

    addOneTopic(topicToBeCreated);

    Navigate('/topic/add');
  });
};

export default TopicAdd;
