

<script setup>
// aqui llamo a pinia
import { useCounterStore } from '@/store/counter';
import { storeToRefs } from 'pinia';

// lo instancio a pinia
const useCounter = useCounterStore()

// tambien puedo destructurar y llamar solo a un metodo retornado desde el store
// increment pertenece a acciones en pinia
const {increment} = useCounter

// para propiedades computadas o ref no se puede llegar y destructurar se debe hacer asi

const {count, double} = storeToRefs(useCounter)


</script>

<template>

  <!-- accedo al estado de counter -->
  <h1>Home counter: {{ count }}</h1>

  <!-- accedo al double donde la propiedad comptutada multiplica por dos-->
  <h2>Double: {{ double }}</h2>

  <!-- uso el metodo de incrementar de pinia -->
  <button @click="increment">increment</button>
 
</template>
