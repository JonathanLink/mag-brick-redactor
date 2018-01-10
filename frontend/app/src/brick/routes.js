import Article from './components/Article'
import Articles from './components/Articles'

export default {
  routes: [{
    path: '/articles',
    component: Articles,
  }, {
    path: '/article/:id',
    component: Article,
  }]
}
