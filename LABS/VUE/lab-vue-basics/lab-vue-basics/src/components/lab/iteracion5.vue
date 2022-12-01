<template>
    <h2>Iteration 5</h2>
    <button @click="ChangeColor">Change Color</button>
    <div class="color" :class="classColor"></div>
</template>

<script setup>
import { ref, reactive } from "vue";

let classColor = ref('');
const ChangeColor = () => {
    classColor.value = 'color';
}

</script>

<style scoped>
    .color {
        border: solid 1px;
        height: 120px;
        width: 120px;
    }
    .color {
        background-color: rgb(151, 24, 224);
    }
</style>