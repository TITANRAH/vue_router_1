import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    count: 0,
    // mensaje: 0,
  }),

  actions: {
    increment() {
      this.count++;
    },
  },

  getters: {

    double: (state) => state.count * 2

  }
}); 
