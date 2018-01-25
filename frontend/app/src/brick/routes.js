import Article from './components/Article'
import Articles from './components/Articles'

export default {
  routes: [{
    path: '/redactor/articles',
    component: Articles,
  }, {
    path: '/redactor/article/:id',
    component: Article,
  }]
}
