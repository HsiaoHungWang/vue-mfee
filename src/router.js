import { createWebHistory, createRouter } from "vue-router"
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"

//路由設定
const routes = [
  // http://localhost:5173/
  // http://localhost:5173/index
  {
    path:'/',  
    component: HomeView,
    alias:'/index',
    name:'home'
   },
   //http://localhost:5173/about
   {
    path:'/about_seo',
    component:AboutView,
    name:'about'
   },
    //http://localhost:5173/contact
    {
      path:'/contact',
      component:ContactView,
      name:'contact'
    }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes: routes
  }
)

export default router