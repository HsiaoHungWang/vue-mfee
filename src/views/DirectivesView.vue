<script setup>
import { ref } from 'vue';

  const message = ref("<h4>指令介紹</h4>")
  const isShow = ref(true)
  const isLoggedIn = ref(false)
</script>

<template>
  <div>
<h2>Directive Demo</h2>
<div>{{ message }}</div>
<div v-text="message"></div>
<div v-html="message"></div>
<img src="@/assets/anya-300-03.png" style="width:50px" v-show="isShow" />

 <div v-if="isLoggedIn">
  <button>登出</button>
 </div>
 <div v-else>
  <button>登入</button>
 </div>

</div>
</template>

<style lang="css" scoped>

</style>