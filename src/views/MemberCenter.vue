<script setup>
  defineProps({
    id:String
  })
</script>

<template>
  <div>
<h2>會員中心</h2>
<!--讀取參數的方法一-->
<p>讀取會員編號 {{ $route.params.id }} 的相關資料</p>

<!--讀取參數的方法二-->
<!--
1.路由設定檔要加上props:true
2.透過defineProps宣告傳進來的參數名稱
3.在template中直接用參數名稱讀值
-->
<p>會員編號 {{ id }}</p>
  </div>
</template>

<style lang="css" scoped>

</style>