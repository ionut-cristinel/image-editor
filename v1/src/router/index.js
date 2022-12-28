import { createRouter, createWebHistory } from 'vue-router'
import EditImageView from '../views/EditImageView.vue'

const routes = [
  {
    path: '/',
    name: 'editor',
    component: EditImageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
