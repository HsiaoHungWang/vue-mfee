<script setup>
import { ref } from 'vue';

const isLogin = ref(false)
const i = ref(0)
const signin = ()=>{
  isLogin.value = !isLogin.value
}
</script>

<template>
 <h2>第二個組件</h2>
 <button @click="signin">Toggle</button>
 <p>{{ isLogin ? "登出":"登入" }}</p>
 <p>{{new Date().toLocaleDateString()}}</p>
 <p>{{ i+1 }}</p> <!-- i = i + 1-->

</template>

<style lang="css" scoped>
 h2{color:blue}
</style>