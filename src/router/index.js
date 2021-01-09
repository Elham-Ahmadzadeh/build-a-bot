/*
* when we navigate to '/' display HomePage component
TODO we should import new router to main.js
! we use /:partType/:id, it is changable in router
*/

import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/home/HomePage.vue'
import RobotBuilder from '@/build/RobotBuilder.vue'
import PartInfo from '@/parts/PartInfo.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/build',
    name: 'Build',
    component: RobotBuilder
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
