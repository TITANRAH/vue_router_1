

<script setup>
import { useCounterStore } from '@/store/counter';

const useCounter = useCounterStore()


</script>

<template>

  <h1>Home counter: {{ useCounter.count }}</h1>

  <button @click="useCounter.increment">increment</button>
 
</template>
