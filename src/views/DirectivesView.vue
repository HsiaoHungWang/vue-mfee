<script setup>
import { ref } from 'vue';

const message = ref("<h4>指令介紹</h4>")
const isShow = ref(true)
const isLoggedIn = ref(false)

const regions = ref([
  { "name": "中山區", "code": 104 },
  { "name": "大安區", "code": 106 },
  { "name": "信義區", "code": 110 },
  { "name": "內湖區", "code": 114 },
  { "name": "士林區", "code": 111 },
  { "name": "中正區", "code": 100 },
  { "name": "松山區", "code": 105 },
  { "name": "北投區", "code": 112 },
  { "name": "大同區", "code": 103 },
  { "name": "文山區", "code": 116 },
  { "name": "南港區", "code": 115 },
  { "name": "萬華區", "code": 108 }
]);
const selectedValue = ref('110')

const user = ref({ "name": "Tom", "email": "Tom@gmail.com", "age": 30 })
const bgColor = ref('green')
const radius = ref(25)

const isDel = ref(false)
const isDanger = ref(false)

const items = ref([])


</script>

<template>
  <div>
    <h2>Directive Demo</h2>
    <div>{{ message }}</div>
    <div v-text="message"></div>
    <div v-html="message"></div>
    <img src="@/assets/anya-300-03.png" style="width:50px" v-show="isShow" />

    <div v-if="isLoggedIn">
      <button>登出</button>
    </div>
    <div v-else>
      <button>登入</button>
    </div>

    <!--v-for讀取陣列中的資料-->
    <select v-model="selectedValue">
      <option v-for="(region, index) in regions" :key="region.code" :value="region.code">{{ index }}{{ region.name }}
      </option>
    </select><span>{{ selectedValue }}</span>
  </div>
  <!--v-for讀取物件中的資料
 {key:value,key:value}-->
  <ul>
    <li v-for="(value, key) in user">{{ key }}:{{ value }}</li>
  </ul>

  <!--v-for產生數字範圍-->
  <ul class="pagination">
    <li class="page-item" v-for="page in 10"><a class="page-link" href="#">{{ page }}</a></li>
  </ul>

  <!-- :style -->
  <input type="color" v-model="bgColor" />

  <div @mouseenter="radius += 10" style="width:200px;height: 200px;border: 1px solid green;"
    :style="{ backgroundColor: bgColor, 'border-radius': radius + 'px' }"></div>

  <!--:class-->
  <input type="checkbox" v-model="isDel">刪除
  <input type="checkbox" v-model="isDanger">危險
  <h2 :class="{ del: isDel, danger: isDanger }">Hello Vue!!</h2>

  <!---->
  <input type="checkbox" value="a" v-model="items">Item1
  <input type="checkbox" value="b" v-model="items">Item2
  <input type="checkbox" value="c" v-model="items">Item3
  <input type="checkbox" value="d" v-model="items">Item4
<span>{{ items }}</span>
</template>

<style lang="css" scoped>
.del {
  text-decoration: line-through;
}

.size {
  font-size: 24px
}

.danger {
  color: red
}
</style>