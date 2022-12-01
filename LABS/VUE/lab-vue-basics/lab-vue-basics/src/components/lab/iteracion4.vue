<template>
    <h1>Iteration 4</h1>
    <h2>list of elements</h2>
    <ul>
        <li v-for="list, index in lists" :key="index">
        <h3>{{list.title}}</h3>
        <h4>{{list.description}}</h4>
        <h5>{{list.content}}</h5>
        </li>
    </ul>
</template>

<script setup>
import { ref, reactive } from "vue";

const lists = reactive([
    {title: 'Post 1', description: 'description1', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!' },
    {title: 'Post 2', description: 'description2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!'},
    {title: 'Post 3', description: 'description3', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta ut delectus voluptate architecto facilis natus placeat quisquam aspernatur repudiandae nulla amet, eius eaque sit? Quis neque ad soluta iure!'}
    ]);
</script>

<style>

</style>