import Articles from './components/Articles'
import Article from './components/Article'

export default {
  brickName: 'redactor',
  brickMenuName: 'News',
  routes: [{
    path: '/articles',
    component: Articles,
  },
  {
    path: '/article/:id?',
    component: Article,
  }]
}
