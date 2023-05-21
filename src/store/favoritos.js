import { defineStore } from "pinia";
import { ref } from "vue";

export const useFavoritosStore = defineStore("favoritos", () => {
  const favoritos = ref([]);

  // si existe elementos en el local y si esta vacio tambien 
  if(localStorage.getItem('favoritos')){

    // tomar datos del local
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))

    console.log(favoritos.value, 'favoritos')
    
    ;}
  const add = (poke) => {
    favoritos.value.push(poke);

    // guarar datos en local
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  };

  //   devuelve todo lo que no sea igual el id del itemp con el id que se pasa como parametro
  const remove = (id) => {
    favoritos.value = favoritos.value.filter((item) => item.id !== id);
    // en el remover tambien por que eliminamos quedan los que queden y guardamos lo que quede
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  };

  //   retorna un true o un false segun encuentre o no el nombnre del pokemon en el arreglo
  // asi podremos manejar el true o false del dissabledel boton de agregar Pokemon
  // y editar el disable
  const findPoke = (name) => {
    return favoritos.value.find((item) => item.name === name);
  };

  return {
    favoritos,
    add,
    remove,
    findPoke,
  };
});
