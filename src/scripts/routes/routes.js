import Detail from '../views/pages/detail';
import Home from '../views/pages/home';
import Like from '../views/pages/like';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/id': Detail,
  '/favorite': Like,
};

export default routes;
