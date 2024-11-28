<script setup>
import { ref } from 'vue';
  
const newTodo = ref('')

const emits = defineEmits(['add'])


//新增代辦事項
const enterHandler = () => {
  //newTodo 傳送到父組件
  emits('add', newTodo.value)
  // todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
  clearHandler()

}

//清除文字方塊的內容
const clearHandler = () => {
  newTodo.value = ""
}
</script>

<template>
   <input type="text" class="form-control" placeholder="想要做甚麼?" v-model="newTodo" @keyup.enter="enterHandler"
   @keyup.delete="clearHandler" />
</template>

<style lang="css" scoped>

</style>