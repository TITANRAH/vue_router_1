<script setup>


import { RouterLink } from 'vue-router';
import { useGetData } from '@/composables/getData'
import { useCounterStore } from '@/store/counter';

const useCounter = useCounterStore()
const { data, getData, loading, error } = useGetData()



getData('https://pokeapi.co/api/v2/pokemon');



</script>

<template>
    <h1>Pokemons</h1>

    <!-- con esto demuestro que el estado se mantiene desde pinia incrementando en cualquier lugar 
    y veo desde cualquier componente -->
    <p v-if="loading">Cargando informacion...</p>
  <!-- accedo al estado de counter -->
  <h1>Home counter: {{ useCounter.count }}</h1>

  <!-- accedo al double donde la propiedad comptutada multiplica por dos-->
  <h2>Double: {{ useCounter.double }}</h2>

  <!-- uso el metodo de incrementar de pinia -->
  <button @click="useCounter.increment">increment</button>
    <div class="alert alert-danger mt-2" v-if="error">{{ error }}</div>
    <div v-if="data">
        <ul class="list-group">
            <li class="list-group-item" v-for="pokemon in data.results" :key="pokemon.name">
                <router-link :to="`/pokemons/${pokemon.name}`">{{ pokemon.name }}</router-link>
            </li>
        </ul>

        <div class="mt-2">

        <button 
            :disabled="!data.previous"
            class="btn btn-success mr-2"
            @click="getData(data.previous)">Previous</button>
        <button 
            :disabled="!data.next" 
            class="btn btn-primary"
            @click="getData(data.next)">Next</button>
        </div>

            <!-- si no existe data.previous es true y eso deshabilitara el boton -->
    </div>
    <!-- <Pokemon v-for="pokemon of pokemons" :name="pokemon.name"  /> -->
</template>