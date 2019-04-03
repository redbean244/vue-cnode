import Vue from 'vue'
import Router from 'vue-router'
import Postlist from '../components/Postlist'
import Article from '../components/Article'
import Userinfo from '../components/Userinfo'
import Slidebar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'root',
      path: '/',
      components:{
        main: Postlist
      }
    },
    {
      name: 'post_content',
      path: '/topic/:id',
      components:{
        main: Article,
        slidebar:Slidebar
      }
    },
    {
      name: 'user_info',
      path: '/userinfo/:name',
      components:{
        main: Userinfo
      }
    }
  ]
})
