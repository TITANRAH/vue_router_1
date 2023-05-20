<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar navbar-light bg-light">
  <router-link class="navbar-brand" to="/">
    <img src="@/assets/logo.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
 
  </router-link>

  <div>
    <router-link class="btn btn-outline-primary mr-2" to="/">Home</router-link>
    <router-link class="btn btn-outline-primary" to="/pokemons">Pokemons</router-link>
  </div>
 
</nav>
 <div class="container text-center">
   <RouterView />
 </div>

</template>

<style scoped>

</style>
