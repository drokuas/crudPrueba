import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearCrud from '../components/CrearCrud.vue'
import EditarCrud from '../components/EditarCrud.vue'
import ListaCrud from '../components/ListaCrud.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/crear',
    name: 'crearCrud',
    component: CrearCrud
  },
  {
    path: '/editar',
    name: 'editarCrud',
    component: EditarCrud
  },
  {
    path: '/lista',
    name: 'listaCrud',
    component: ListaCrud
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
