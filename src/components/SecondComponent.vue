<script setup>
import { ref } from 'vue';

const isLogin = ref(false)
const i = ref(0)
const signin = ()=>{
  isLogin.value = !isLogin.value
}
const week = ref(["日", "一", "二", "三", "四", "五", "六"])
const author = ref({ 
    "name":"Jack",
    "books": [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
    ]
})

</script>

<template>
 <h2>第二個組件</h2>
 <button @click="signin">Toggle</button>
 <p>{{ isLogin ? "登出":"登入" }}</p>
 <p>{{new Date().toLocaleDateString()}}</p>
 <p>{{ i+1 }}</p> <!-- i = i + 1-->
<p>星期 {{ week[new Date().getDay()]}}</p>
<p>作者 {{ author.name }} {{author.books.length > 0 ? "有":"還沒有"}}出版書籍</p>
</template>

<style lang="css" scoped>
 h2{color:blue}
</style>