<script setup>
import { computed, ref, watchEffect } from 'vue';

const newTodo = ref('')
// const todos = ref([
//   { "id": "m21uwqfprb0ncx4", "title": "聚餐@18:00", "completed": false },
//   { "id": "m21w6x73hw2tvrc", "title": "運動", "completed": false },
//   { "id": "m21w6x73hw2abcd", "title": "會議", "completed": true },
// ])

//讀取localStorage
const todos = ref(JSON.parse(localStorage.getItem("todos")) || [])

//資料寫進localStorage
watchEffect(()=>{
  localStorage.setItem('todos', JSON.stringify(todos.value ))
})


//取得唯一值
const uniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2, 9);

//新增代辦事項
const enterHandler = () => {
  todos.value.push({ "id": uniqueId(), "title": newTodo.value, "completed": false })
  clearHandler()
  console.log(todos.value)
}

//刪除代辦事項
const removeTodo = todo => {
  //回傳todo的索引值
  const idx = todos.value.indexOf(todo)
  //刪除
  todos.value.splice(idx, 1)
}

//移除所有完成的工作
const removeCompleted = () => {
  for (let i = todos.value.length - 1; i >= 0; i--) {
    if (todos.value[i].completed) {
      todos.value.splice(i, 1)
    }
  }
}

//計算還有幾個工作待完成
const remaining = computed(()=>{
  const activeTodos = todos.value.filter(todo => !todo.completed)
  return activeTodos.length
})



//清除文字方塊的內容
const clearHandler = () => {
  newTodo.value = ""
}

</script>

<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
      <h2>代辦事項</h2>
      <input type="text" class="form-control" placeholder="想要做甚麼?" v-model="newTodo" @keyup.enter="enterHandler"
        @keyup.delete="clearHandler" />
      <ul class="list-group mt-3">
        <li v-for="todo in todos" :key="todo.id" class="list-group-item">
          <div class="d-flex justify-content-between">
            <div>
              <input v-model="todo.completed" class="form-check-input me-3" type="checkbox">
              <label class="form-check-label" :class="{completed:todo.completed}">{{ todo.title }}</label>
            </div>




            <button @click="removeTodo(todo)" class="badge bg-danger rounded-pill border-0">X</button>
          </div>
        </li>
      </ul>
      <div v-if="todos.length > 0" class="mt-3 d-flex justify-content-between">
        <strong class=" me-3">尚有 {{ remaining }} 個工作未完成</strong>
        <button class="btn btn-warning me-3" @click="removeCompleted">清除完成工作</button>
      </div>

    </div>
    <div class="col-3"></div>
  </div>
</template>

<style lang="css" scoped>
.completed {
color: #949494;
text-decoration: line-through;
}
</style>