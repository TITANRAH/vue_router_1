import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // linkActiveClass: "active",
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons', 
      component: () => import('../views/PokemonsViews.vue')
    },
    {
      // lo que sea los params es lo que podre poner en route.params.name
      path: '/pokemons/:name',
      name: 'poke', 
      component: () => import('../views/Pokemon.vue')
    },
    {
      // lo que sea los params es lo que podre poner en route.params.name
      path: '/:patMatch(.*)*',
      name: 'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
