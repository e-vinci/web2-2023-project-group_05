import Navigate from '../Router/Navigate';


const TopicView = () => {

    const viewTopic = ``;
  
      const main = document.querySelector('main');
      main.innerHTML = viewTopic;

        Navigate('/topic/view');
    };

export default TopicView;