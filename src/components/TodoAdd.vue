<script setup>
  
</script>

<template>
   <input type="text" class="form-control" placeholder="想要做甚麼?" v-model="newTodo" @keyup.enter="enterHandler"
   @keyup.delete="clearHandler" />
</template>

<style lang="css" scoped>

</style>