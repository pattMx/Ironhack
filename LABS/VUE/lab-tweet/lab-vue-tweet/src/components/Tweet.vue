<template>
  <div class="tweet">
    <ProfileImage :image="image"/>

    <div class="body">
      <div class="top">
        <User :name="name" :handle="handle" />

        <Timestamp :timestamp="timestamp" />
      </div>

      <Message :message="message" />

      <Actions />
    </div>

    <i class="fas fa-ellipsis-h"></i>
  </div>
</template>

<script setup>
import ProfileImage from './ProfileImage.vue';
import User from './user.vue';
import Timestamp from './timestamp.vue';
import Message from './message.vue';
import Actions from './actions.vue';
defineProps ({
    name: {
        type: String,
        required: false,
        default: "default name",
    },
    image: {
        type: String,
        required: false,
        default: "default image",
    },
    handle: {
        type: String,
        required: false,
        default: "default handle",
    },
    timestamp: {
        type: String,
        required: false,
        default: "default timestamp",
    },
    message: {
        type: String,
        required: false,
        default: "default message",
    },
});
</script>

<style scoped>
a {
  color: #42b983;
}
</style>