import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import GamePage from '../Pages/GamePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import TopicAdd from '../Pages/TopicAdd';
import TopicView from '../Pages/TopicView'


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/gamepage' :GamePage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/topic/add': TopicAdd,
  '/topic/view': TopicView,
};

export default routes;
