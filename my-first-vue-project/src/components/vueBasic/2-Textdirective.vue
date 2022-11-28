<template>
    <div id="using-v-text-directive">
        <h1>Using a v-text Directive</h1>

        <h3 v-text="favoriteBand"></h3>
    </div>
</template>

<script setup> 
import { ref } from "vue";

let favoriteBand = ref(
    "una de mis bandas favoritas es Artic Monkeys"
);
</script>

<style></style>