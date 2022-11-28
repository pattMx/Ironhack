<template>
    <!-- usando text interpolation aka syntax de bigotes -->
    <h1> Mi nombre es {{myInfo.name}}, tengo {{myInfo.age}}, naci el {{myInfo.DateOfBirth}} y mis 5 hobbies son {{myInfo.hobbies.toString()}}</h1>
    <p>Mi pelicula favorita es {{FavoriteMovie}} la e visto {{numMovie}} veces y mi comida favorita es {{FavoriteFood}}</p>


</template>

<!-- aq1ui el js -->
<script setup>
// si queremnos trabajar con datos primitvos o no primitvos dentro de nuestro scrpt con el composition API tenemos que activar nuestra reactividad.Esta reacividad por defecto se usan 2 tipos de metyodos nativos al framework para poder trabajar de una manera reactiva.
// un metodo se llama ref()
// un metodo se llama rective()

// pasos

// primero importar estos metodos desde la libreria de vue

import { ref, reactive } from "vue"

// declarar variables que contengan metodos dentro para poder trabajar correctamente datos que sean reactivos



const FavoriteMovie = ref("El viaje de chihiro");
const numMovie = ref("5");

const FavoriteFood = ref("Enchiladas");


// no primitive dsta types
const myInfo = reactive({
    name: "Patricia",
    age: 27,
    DateOfBirth: "07 de Julio de 1995",
    hobbies: 
        ["jugar video juegos",
        "ver anime",
        "leer",
        "hacer postres",
        "viajar",
    ],
});



</script>

<!-- aqui el css -->
<style></style>

