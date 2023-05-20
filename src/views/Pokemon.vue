
<script setup>
import { useGetData } from '@/composables/getData';
import { useRoute, useRouter } from 'vue-router';


// con esto accedo a los parametros que vienen desde pokemon views
const route = useRoute();
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
      <h1>Poke name: {{ $route.params.name }}</h1>
      <img :src="data.sprites?.front_default" alt="">
   </div>
   <button class="btn btn-outline-primary" @click="back">Volver</button>
</template>