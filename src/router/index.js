import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import About from '../views/securelabs/About';
import Contact from '../views/home/Contact';
import Faqs from '../views/home/Faqs';
const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About',
    component:About
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
  {
    path:'/faqs',
    name:'Faqs',
    component:Faqs
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
