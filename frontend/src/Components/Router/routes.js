import Header from '../Header/Header';
import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import TopicAdd from '../Pages/TopicAdd';
import TopicView from '../Pages/TopicView'
import ResultsPage from '../Pages/ResultsPage';


const routes = {
  '/Header': Header,
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/topic/add': TopicAdd,
  '/topic/view': TopicView,
  '/results': ResultsPage
};

export default routes;
