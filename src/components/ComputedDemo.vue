<script setup>
import { computed, ref } from 'vue';


  const celsius = ref(0)
  const TempatureConvert = ()=>{
    console.log("convert")
    return (celsius.value * 9 / 5) + 32
  }
  const fahrenheit = computed(()=>{
    console.log("computed")
    return (celsius.value * 9 / 5) + 32
  })
</script>

<template>
  <div>
<h2>Computed Demo</h2>
<div>攝氏：<input type="text" v-model.lazy.number="celsius" /></div>
<div>華氏：{{(celsius * 9 / 5) + 32 }}</div>
<div>華氏(function)：{{ TempatureConvert() }}{{ TempatureConvert() }}{{ TempatureConvert() }}</div>
<div>華氏(computed)：{{fahrenheit }}{{fahrenheit }}{{fahrenheit }}</div>

  </div>
</template>

<style lang="css" scoped>

</style>