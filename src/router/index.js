import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import About from '../views/securelabs/About';
import Contact from '../views/home/Contact';
import Faqs from '../views/home/Faqs';
import Blog from '../views/blog/blog.vue';
import Formation from '../views/formation/formation.vue';
import Logiciel from '../views/logiciel/Logiciel';
import CyberSecurity from '../views/cybersecurity/CyberSecurity';
import Audit from '../views/cybersecurity/Audit';
import Expertise from '../views/expertise/expertise.vue';
import Services from '../views/services/services.vue';

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
  },
  ,
  {
    path:'/services',
    name:'Services',
    component:Services
  },
  {
    path:'/blog',
    name:'Blog',
    component:Blog
  },
  {
    path:'/formation',
    name:'Formation',
    component:Formation
  },
  {
    path:'/logiciel',
    name:'Logiciel',
    component:Logiciel
  },
  {
    path:'/expertise',
    name:'Expertise',
    component:Expertise
  },
  {
    path:'/cybersecurity',
    name:'CyberSecurity',
    component:CyberSecurity
  },
  {
    path:'/Audit',
    name:'Audit',
    component:Audit
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
