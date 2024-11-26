<template>
  <h2>{{ message }}</h2>
  <input type="text" v-model="message" />
</template>
<script setup>
import { ref } from 'vue';
const message = ref("First Component")

</script>
<style scoped>
  h2{color:green}
</style>