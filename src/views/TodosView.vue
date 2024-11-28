<script setup>
import { ref } from 'vue';

const newTodo = ref('')
const todos = ref( [
  { "id": "m21uwqfprb0ncx4", "title": "聚餐@18:00", "completed": false },
  { "id": "m21w6x73hw2tvrc", "title": "運動", "completed": false },
  { "id": "m21w6x73hw2abcd", "title": "會議", "completed": true },
])

  //取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//新增代辦事項
const enterHandler = ()=>{
  todos.value.push({"id":uniqueId(),"title":newTodo.value,"completed":false})
  clearHandler()
  console.log(todos.value)
}
//清除文字方塊的內容
const clearHandler = ()=>{
  newTodo.value = ""
}

</script>

<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
 <h2>代辦事項</h2>
<input type="text" class="form-control" placeholder="想要做甚麼?" v-model="newTodo" @keyup.enter="enterHandler" @keyup.delete="clearHandler" />
<ul class="list-group mt-3">
  <li v-for="todo in todos" :key="todo.id"  class="list-group-item">
    <div class="d-flex justify-content-between">
      <div>
         <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
<label class="form-check-label">{{ todo.title }}</label>
      </div>
     

    
   
    <button class="badge bg-danger rounded-pill border-0">X</button></div>
  </li>
</ul>
<div class="mt-3 d-flex justify-content-between">
<strong class=" me-3">尚有 {{  }} 個工作未完成</strong>
<button class="btn btn-warning me-3">清除完成工作</button>
</div>

    </div>
    <div class="col-3"></div>
  </div>
</template>

<style lang="css" scoped>

</style>