import HomePage from '../Pages/HomePage';
import NewPage from '../Pages/NewPage';
import GamePage from '../Pages/GamePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';


const routes = {
  '/': HomePage,
  '/new': NewPage,
  '/gamepage' :GamePage,
  '/login' : LoginPage,
  '/register':RegisterPage,
};

export default routes;
