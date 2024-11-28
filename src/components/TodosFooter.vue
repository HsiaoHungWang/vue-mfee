<script setup>
   const props = defineProps({
     abc:Number
   })

   const emit = defineEmits(['xyz'])

   const clickHandler = ()=>{
    //觸發父組件定義的xyz事件
    emit('xyz')
   }
</script>

<template>
   <div class="mt-3 d-flex justify-content-between">
        <strong class=" me-3">尚有 {{ abc }} 個工作未完成</strong>
        <button class="btn btn-warning me-3" @click="clickHandler">清除完成工作</button>
      </div>
</template>

<style lang="css" scoped>

</style>