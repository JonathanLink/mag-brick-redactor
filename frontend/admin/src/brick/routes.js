import Articles from './components/Articles'
import Article from './components/Article'

export default {
  routes: [{
    path: '/redactor/articles',
    component: Articles,
  },
  {
    path: '/redactor/article/:id?',
    component: Article,
  }]
}
