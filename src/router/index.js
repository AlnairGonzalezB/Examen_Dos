import { createRouter, createWebHistory } from 'vue-router'
import LibroList from '@/components/LibroList'
import LibroCreate from '@/components/LibroCreate'
import Librodelete from '@/components/LibroDelete'
import LibroEdit from '@/components/LibroEdit'

const routes = [
  {
    path: '/',
    name: 'LibroList',
    component: LibroList
  },
  {
    path: '/create',
    name: 'LibroCreate',
    component: LibroCreate
  },
  {
    path: '/delete/:id',
    name: 'LibroDelete',
    component: Librodelete
  },
  {
    path: '/edit/:id',
    name: 'LibroEdit',
    component: LibroEdit
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
