<script setup>
import { ref, watch, watchEffect } from 'vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

import BmiCalc from './components/BmiCalc.vue';
import ComputedDemo from './components/ComputedDemo.vue';
import FirstComponent from './components/FirstComponent.vue';
import SecondComponent from './components/SecondComponent.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';

const formatTime = (today) => {
  const hours = String(today.getHours()).padStart(2, '0');
  const minutes = String(today.getMinutes()).padStart(2, '0');
  const seconds = String(today.getSeconds()).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

const clock = ref(formatTime(new Date()))

// watch(clock,(newTime, oldTime)=>{
//   console.log('new：', newTime)
//   console.log('old：', oldTime)
// },{once:true}) //immediate:true

watchEffect(()=>{
  console.log(clock.value)
  //call api?id=1 fetch
})

// setInterval(() => {
//    clock.value = formatTime(new Date())
// }, 1000)

</script>

<template>
  <div class="container">
    <h2>Hello Vue!!!! {{ clock }}</h2>
    <RouterLink :to="{name:'home'}">首頁</RouterLink> |
    <RouterLink :to="{name:'about'}">關於</RouterLink> |
    <RouterLink :to="{name:'contact'}">聯絡我們</RouterLink> |
    <RouterLink :to="{name:'member',params:{id:20}}">會員中心</RouterLink>
    <hr />
    
    <RouterView></RouterView>
</div>




 <!-- <FirstComponent></FirstComponent>
  <SecondComponent></SecondComponent>
  <ComputedDemo></ComputedDemo>
  <BmiCalc></BmiCalc> 
  <HomeView></HomeView>
  <AboutView></AboutView>
  <ContactView></ContactView>-->
  
</template>

<style scoped>

</style>
