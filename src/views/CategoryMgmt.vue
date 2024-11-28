<script setup>
import { ref } from 'vue';


//從.env讀出API路徑
  const BASE_URL = import.meta.env.VITE_APIURL
  //console.log(BASE_URL)
  const API_URL = `${BASE_URL}/categories/`

  const categories = ref([])
  const category = ref({
    "CategoryId": 0,
    "CategoryName": ""
   })

  const loadCategories = async()=>{
     const response = await fetch(API_URL)
     const datas = await response.json()
     categories.value = datas   
  }

  loadCategories()

  //分類新增、修改
  const addCategory = async ()=>{
    if(category.value.CategoryId > 0){
      //修改
      updateCategory()
    }else{
      //新增
      const response = await fetch(API_URL, {
        body: JSON.stringify(category.value),
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
      })
      if (response.ok) { loadCategories() }
    }
  

    clearData()


  }

  //分類修改
  const updateCategory = async () => {
    const response = await fetch(`${API_URL}${category.value.CategoryId}/`, {
        body: JSON.stringify(category.value),
        method: 'PUT',
        headers: {  'Content-Type': 'application/json' }
    })
    if (response.ok) { loadCategories()}
}

  //分類刪除
  const removeCategory = async(category) => {
    
     const response = await fetch(`${API_URL}${category.CategoryId}/`, {
            method: 'DELETE'
     })
    if (response.ok) { loadCategories() }

  }

  //分類編輯
  const editCategory = (_category) =>{
    category.value = _category
  }

  const clearData = ()=>{
    category.value.CategoryId = 0
    category.value.CategoryName = ""
  }

</script>

<template>
  <div>
<h2>景點分類管理</h2>
<div class="row">
  <div class="col-3">
    <ul class="list-group mt-3">
        <li v-for="category in categories" :key="category.CategoryId" class="list-group-item">
          <div class="d-flex justify-content-between">
            <div>
             
              <label class="form-check-label">{{ category.CategoryName }}</label>
            </div>
            <div>
               <button @click="removeCategory(category)" class="badge bg-danger rounded-pill border-0">X</button> 
               <button @click="editCategory(category)" class="badge bg-primary rounded-pill border-0">I</button>
            </div>
           
          </div>
        </li>
      </ul>

  </div>
  <div class="col-6">
    <div class="input-group mb-3">
       <input type="text" class="form-control" v-model="category.CategoryName" />
       <button @click="addCategory" class="btn btn-primary">新增分類</button>
</div>


  </div>
  <div class="col-3"></div>
</div>
  </div>
</template>

<style lang="css" scoped>

</style>