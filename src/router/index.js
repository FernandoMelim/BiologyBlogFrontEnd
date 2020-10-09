import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import LabMembers from '../views/LabMembers/LabMembers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/ResearchInt',
  //   name: 'ResearchInt',
  //   component: ResearchInt
  // },
  {
    path: '/LabMembers',
    name: 'LabMembers',
    component: LabMembers
  },
  // {
  //   path: '/Publications',
  //   name: 'Publications',
  //   component: Publications
  // },
  // {
  //   path: '/FormerStudents',
  //   name: 'FormerStudents',
  //   component: FormerStudents
  // },
  // {
  //   path: '/CoursesEvents',
  //   name: 'CoursesEvents',
  //   component: CoursesEvents
  // },
  // {
  //   path: '/SocialProjects',
  //   name: 'SocialProjects',
  //   component: SocialProjects
  // },
  // {
  //   path: '/Blog',
  //   name: 'Blog',
  //   component: Blog
  // },
  {
    path: '/*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
