<template>
    <h1>iteracion 3</h1>
    <div>
        <h4 v-if="awesome">Vue is awesome!</h4>
        <h4 v-else> Oh no 😢</h4>  
    </div>
    
</template>

<script>
import { ref} from "vue";
const awesome = ref(false);
</script>

<style>

</style>