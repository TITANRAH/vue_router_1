
<script setup>
import { useGetData } from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router';
import { useFavoritosStore } from '@/store/favoritos';



const useFavoritos = useFavoritosStore()

const {add, findPoke} = useFavoritos;
// con esto accedo a los parametros que vienen desde pokemon views
const route = useRoute();

// esto es para direccionar
const router = useRouter();

const { data, getData, loading, error } = useGetData();




// con esto vuelvo a la pagina que quiera
const back = () => {
   router.push('/pokemons')
}

getData(`http://pokeapi.co/api/v2/pokemon/${route.params.name}`)

</script>

<template>
   <p v-if="loading">Cargando informacion...</p>
   <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
   <div v-if="data">
      <img :src="data.sprites?.front_default" alt="">
      <h1>Poke name: {{ $route.params.name }}</h1>
      <button :disabled="findPoke(data.name)" class="btn btn-primary mt-2 mb-2" @click="add(data)">Agregar Favorito</button>
   </div>
   <button class="btn btn-outline-primary" @click="back">Volve</button>
</template>