<script setup>
import { useFavoritosStore } from '@/store/favoritos';
import { storeToRefs} from 'pinia'

const useFavoritos = useFavoritosStore()
const {favoritos} = storeToRefs(useFavoritos)

</script>
<template>
    <div>
        <h2>FAVORITOS</h2>

        <!-- siempre un else solo puede ir despues de un if -->
        <p v-if="favoritos.length === 0">Sin favoritos</p>
        <ul v-else class="list-group">

            <li 
                v-for="pokeadd in favoritos" 
                :key="pokeadd.id" 
                class="list-group-item"
                >
                {{ pokeadd.name }}
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped></style>


<!-- 1. crear storage pinia 
2. crear metodo agregar pokemon 
3. crear favoritos array como ref en el storage
4. exportar metodo y ref con el contenido del array favoritos
5. importar el storage y sacar el metodo y el array favoritos 
6. destrucuturar data de ref si se quiere con storeRef o simplemente usar useFavoritos.add o useFavoritos.favoritos 
7. pintar con v for -->