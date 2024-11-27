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

const id = ref("100903")
const homeUrl = ref("https://www.ispan.com.tw")
const isDisabled = ref(false)
const message = ref("Hello Vue!!")

const num1 = ref(0)
const num2 = ref(0)
</script>

<template>
 <h2>第二個組件</h2>
 <button @click="signin">Toggle</button>
 <p>{{ isLogin ? "登出":"登入" }}</p>
 <p>{{new Date().toLocaleDateString()}}</p>
 <p>{{ i+1 }}</p> <!-- i = i + 1-->
<p>星期 {{ week[new Date().getDay()]}}</p>
<p>作者 {{ author.name }} {{author.books.length > 0 ? "有":"還沒有"}}出版書籍</p>
<!--屬性繫節-->
<p :data-id="id">{{ id }}</p>
<p :id="id">{{ id }}</p>
<p :id>{{ id }}</p>
<a :href="homeUrl">iSpan</a>
<hr />
<button  :disabled="isDisabled">Click</button>

<!-- <img src="/images/batch.jpg" />
<img src="@/assets/anya-300-03.png" /> -->


<hr />

<!--Two Way Binding-->

<input type="text" v-model.lazy.trim="message"><span>{{ message }}{{ message.length }}</span>
<input type="text" v-model.number="num1" />
<input type="text" v-model.number="num2" />
<p>{{ num1 + num2 }}</p>
</template>

<style lang="css" scoped>
 h2{color:blue}

</style>