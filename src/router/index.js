import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resources from '../views/Resources.vue'
import Mentorship from '../views/Mentorship.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/resources', component: Resources },
  { path: '/mentorship', component: Mentorship }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
