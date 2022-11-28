<template>
    <button @click="helloWorld()">Click aquí!</button>
</template>

<script setup>
import { ref, reactive } from "vue"

const helloWorld = () => {
	alert("Hello world!");
};
</script>

<style></style>