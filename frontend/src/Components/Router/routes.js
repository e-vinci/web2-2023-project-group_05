import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';
import TopicAdd from '../Pages/TopicAdd';
import TopicView from '../Pages/TopicView'
import ResultsPage from '../Pages/ResultsPage';
import CategoriesView from '../Pages/CategoriesView'; 

const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/login' : LoginPage,
  '/register': RegisterPage,
  '/topic/add': TopicAdd,
  '/topic/view': TopicView,
  '/results': ResultsPage, 
  '/categories/view': CategoriesView,
};

export default routes;
