<script setup>
import { ref } from 'vue';


  const celsius = ref(0)
</script>

<template>
  <div>
<h2>Computed Demo</h2>
<div>攝氏：<input type="text" v-model.lazy.number="celsius" /></div>
<div>華氏：{{(celsius * 9 / 5) + 32 }}</div>

  </div>
</template>

<style lang="css" scoped>

</style>