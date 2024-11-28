import { defineStore } from "pinia";
import { ref } from "vue";
export const useTodoStore = defineStore('todos',()=>{
  let todos = localStorage.getItem('todos')
  if(todos){
    todos = JSON.parse(todos)
  }else{
    todos = []
  }

  //代辦事項未完成數量
  const activeTodos = todos.filter(todo => !todo.completed)
  const numberOfTodos = ref(activeTodos.length)
  const numberOfTodosChange = count =>{
    numberOfTodos.value = count
  }

  return {numberOfTodos, numberOfTodosChange}
})