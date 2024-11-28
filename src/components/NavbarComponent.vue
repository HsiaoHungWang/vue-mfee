<script setup>
  import { useTodoStore } from '@/stores/todos';
  const todoStore = useTodoStore()

</script>

<template>
 <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MFEE-VUE</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
         
          <RouterLink :to="{name:'home'}" class="nav-link" activeClass="active">首頁</RouterLink> 
    
        </li>
        <li class="nav-item">
          <RouterLink :to="{name:'about'}" class="nav-link" activeClass="active">關於</RouterLink> 
        </li>
        <li class="nav-item">
         
    <RouterLink :to="{name:'contact'}" class="nav-link" activeClass="active">聯絡我們    
    </RouterLink>
    
        </li>
        <li class="nav-item">
         
    <RouterLink :to="{name:'directive'}" class="nav-link" activeClass="active">指令介紹</RouterLink>
        </li>
        <li class="nav-item">
         
    <RouterLink :to="{name:'todos'}" class="nav-link" activeClass="active">代辦事項 <span class="badge text-bg-secondary">{{todoStore.numberOfTodos}}</span>
    </RouterLink>
        </li>
        <li class="nav-item">
        
    <RouterLink :to="{name:'member',params:{id:20}}" class="nav-link" activeClass="active">會員中心</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style lang="css" scoped>

</style>