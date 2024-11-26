<template>
  <h2>{{ message }}</h2>
  <input type="text" v-model="message" />
  <button @click="add">{{ count }}</button>
</template>
<script setup>
import { ref } from 'vue';
const message = ref("First Component")
const count = ref(0)

const add = ()=>{
// console.log(count)
// console.log(count.value)
count.value++
}

</script>
<style scoped>
  h2{color:green}
</style>