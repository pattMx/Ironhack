<template>
    <p>My name is patricia</p>
    <h1> Mi nombre es {{myInfo.name}}, tengo {{myInfo.age}}, naci el {{myInfo.DateOfBirth}}</h1>
</template>

<script setup>

import { ref, reactive } from "vue"

const myInfo = reactive({
    name: "Patricia",
    age: 27,
    DateOfBirth: "07 de Julio de 1995",
});
</script>




<style></style>