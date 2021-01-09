/*
* when we navigate to '/' display HomePage component
TODO we should import new router to main.js
ToDo CREATE LINKS IN BROWSEPARTS FOR CHILDREN
! we use /:partType/:id, it is changable in router
? remembr default and sidebar in components corresponds router-views in App.vue
*/

import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/home/HomePage.vue'
import RobotBuilder from '@/build/RobotBuilder.vue'
import PartInfo from '@/parts/PartInfo.vue'
import BrowseParts from '@/parts/BrowseParts.vue'
import RobotHeads from '@/parts/RobotHeads.vue'
import RobotArms from '@/parts/RobotArms.vue'
import RobotTorsos from '@/parts/RobotTorsos.vue'
import RobotBases from '@/parts/RobotBases.vue'
import SidebarStandard from '@/sidebars/SidebarStandard.vue'
import SidebarBuild from '@/sidebars/SidebarBuild.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: HomePage,
      sidebar: SidebarStandard
    }
  },
  {
    path: '/build',
    name: 'Build',
    components: {
      default: RobotBuilder,
      sidebar: SidebarBuild
    }
  }, {
    path: '/parts/browse',
    name: 'BrowseParts',
    component: BrowseParts,
    children: [
      {
        name: 'BrowseHeads',
        path: 'heads',
        component: RobotHeads
      },
      {
        name: 'BrowseArms',
        path: 'arms',
        component: RobotArms
      },
      {
        name: 'BrowseTorsos',
        path: 'torso',
        component: RobotTorsos
      },
      {
        name: 'BrowseBases',
        path: 'bases',
        component: RobotBases
      }
    ]
  },
  {
    path: '/parts/:partType/:id',
    name: 'Parts',
    component: PartInfo,
    props: true // for vue will pass as props
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
