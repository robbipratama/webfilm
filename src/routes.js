import Home from './components/home.vue';
import Detail from './components/detailFilm.vue';

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/detail/:id', component: Detail, name: 'detail' },
];

export default routes;
