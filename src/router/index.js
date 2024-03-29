import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/Home';
import About from '../views/securelabs/About';
import Contact from '../views/home/Contact';
// import Blog from '../views/blog/blog.vue';
import FormCyber from '../views/formation/FormCyber';
import FormRgpd from '../views/formation/FormRgpd';
import Reference from '../views/formation/Reference';
import Logiciel from '../views/logiciel/logiciel';
import AuditOrganisationnel from '../views/cybersecurity/AuditOrganisationnel';
import RepriseActivity from '../views/cybersecurity/RepriseActivity';
import AnalyseRisque from '../views/cybersecurity/AnalyseRisque';
import GestionRisque from '../views/cybersecurity/GestionRisque';
import PolitiqueSecurity from '../views/cybersecurity/PolitiqueSecurity';
import RssiExternalise from '../views/cybersecurity/RssiExternalise';
import Certification from '../views/cybersecurity/Certification';

import Expertise from '../views/expertise/expertise.vue';
import Services from '../views/services/services.vue';
import rgpdaudit from '../views/rgpd/rgpdaudit.vue';
import rgpddpoex from '../views/rgpd/rgpddpoex.vue';
import rgpddpoexmu from '../views/rgpd/rgpddpoexmu.vue';
import rgpdaccomp from '../views/rgpd/rgpdaccomp.vue';
import mentionLegal from '../views/mentionLegal/mentionlegal.vue';
import PolitiqueConfid from '../views/Politique de confidentialité/Politique.vue';
import ConditionsUtili from '../views/Conditions utilisation/ConditionsUtili.vue';





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
    path:'/services',
    name:'Services',
    component:Services
  },
  // {
  //   path:'/blog',
  //   name:'Blog',
  //   component:Blog
  // },
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
    path:'/AuditOrganisationnel',
    name:'AuditOrganisationnel',
    component:AuditOrganisationnel
  },
  {
    path:'/RepriseActivity',
    name:'RepriseActivity',
    component:RepriseActivity
  },
  {
    path:'/AnalyseRisque',
    name:'AnalyseRisque',
    component:AnalyseRisque
  },
  {
    path:'/GestionRisque',
    name:'GestionRisque',
    component:GestionRisque
  },
  {
    path:'/PolitiqueSecurity',
    name:'PolitiqueSecurity',
    component:PolitiqueSecurity
  },
  {
    path:'/RssiExternalise',
    name:'RssiExternalise',
    component:RssiExternalise
  },
  {
    path:'/Certification',
    name:'Certification',
    component:Certification
  },
  {
    path:'/rgpd-audit',
    name:'rgpdaudit',
    component: rgpdaudit
  },
  {
    path:'/rgpd-dpoex',
    name:'rgpddpoex',
    component: rgpddpoex
  },
  {
    path:'/rgpd-dpoexmu',
    name:'rgpddpoexmu',
    component: rgpddpoexmu
  },
  {
    path:'/rgpd-accomp',
    name:'rgpdaccomp',
    component: rgpdaccomp
  },
  {
    path:'/FormationCybersecurity',
    name:'FormationCyber',
    component: FormCyber,
  },
  {
    path:'/FormationRgpd',
    name:'FormationRgpd',
    component: FormRgpd
  },
  {
    path:'/FormationReference',
    name:'FormationReference',
    component:Reference
  },
  {
    path:'/MentionLegal',
    name:'MentionLegal',
    component:mentionLegal
  },
  {
    path:'/PolitiqueConfid',
    name:'PolitiqueConfid',
    component:PolitiqueConfid
  },
  {
    path:'/ConditionsUtili',
    name:'ConditionsUtili',
    component:ConditionsUtili
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router