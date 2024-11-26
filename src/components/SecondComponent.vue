<script setup>
import { ref } from 'vue';

const isLogin = ref(false)
</script>

<template>
 <h2>第二個組件</h2>
 <button>Click</button>
 <p>{{ isLogin ? "登出":"登入" }}</p>
</template>

<style lang="css" scoped>
 h2{color:blue}
</style>