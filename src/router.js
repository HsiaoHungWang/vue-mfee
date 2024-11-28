import { createWebHistory, createRouter } from "vue-router"
import HomeView from "./views/HomeView.vue"
import AboutView from "./views/AboutView.vue"
import ContactView from "./views/ContactView.vue"
import Team1View from "./views/Team1View.vue"
import Team2View from "./views/Team2View.vue"
import MemberCenter from "./views/MemberCenter.vue"
import NotFound from "./views/NotFound.vue"
import DirectivesView from "./views/DirectivesView.vue"
import TodosView from "./views/TodosView.vue"
import CategoryMgmt from "./views/CategoryMgmt.vue"

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
    name:'about',
    // redirect:'/about_seo/team2',
    children:[
      //http://localhost:5173/about_seo/team1
      {
        path:'team1',
        component:Team1View,
        name:'team1',
      },
      //http://localhost:5173/about_seo/team2
      {
        path:'team2',
        component:Team2View,
        name:'team2',
      }
    ]
   },
    //http://localhost:5173/contact
    {
      path:'/contact',
      component:ContactView,
      name:'contact'
    },
    //http://localhost:5173/member/會員編號
    {
      path:'/member/:id',
      component:MemberCenter,
      name:'member',
      props:true
    },
    //http://localhost:5173/directive
    {
      path:'/directive',
      component:DirectivesView,
      name:'directive'
    },
    //http://localhost:5173/todos
    {
      path:'/todos',
      component:TodosView,
      name:'todos'
    },
    //http://localhost:5173/category
    {
      path:'/category',
      component:CategoryMgmt,
      name:'category'
    },
    //404
    {
      path:"/:pathMatch(.*)*",
      component:NotFound
    }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes: routes
  }
)

export default router