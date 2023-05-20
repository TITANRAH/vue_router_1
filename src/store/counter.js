import { computed, ref } from "@vue/reactivity";
import { defineStore } from "pinia";


// pinia con composition api
export const useCounterStore = defineStore("counter", ()=> {
 
  const count = ref(0)

  const increment = () => {
    count.value ++;
  }

  const double = computed(()=> count.value * 2)


  return {
    count, 
    increment,
    double
  }
}); 


// pina con api de opciones
// export const useCounterStore = defineStore("counter", {
//   state: () => ({
//     count: 0,
//     // mensaje: 0,
//   }),

//   // metodos
//   actions: {
//     increment() {
//       this.count ++;
//     },
//   },

//   // computadas
//   getters: {

//     double: (state) => state.count * 2,

//   }
// }); 


