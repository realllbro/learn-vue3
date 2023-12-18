<template>
  <div>
    <!-- v-for 문 사용-->        
    <ul>
      <li v-for="(item, index) in items" :key="item.id">
        인덱스 : {{ index }}, {{ item.message }}
      </li>
    </ul>

    <!-- v-if 문 사용 한 엘리먼트에 v-for, v-if 를 중첩해서 사용하지 않는다.-->    
    <hr>
    <ul>
        <template v-for="(item, index) in items" :key="item.id">
          <li v-if="item.id % 2 === 0">
           ID : {{ item.id }} 인덱스 :  {{ index }}, {{ item.message }}
          </li>
        </template>
    </ul>    

    <!-- v-if 대신 computed 사용 -->
    <hr>
    <ul>
        <template v-for="(item, index) in evenItems" :key="item.id">           
           <li>ID : {{ item.id }} 인덱스 :  {{ index }}, {{ item.message }}</li>
        </template>
    </ul>      

    <!-- v-for 객체안에 요소(속성) 꺼내기 iterator 같은건가.. -->    
    <hr>
    <ul>
        <li v-for="(value, key, index) in myObject" :key="key">    
          {{ index }}-{{ key }}-{{ value }}
        </li>
    </ul>



  </div>
</template>

<script>

import { computed, reactive } from 'vue';

export default {
  setup () {
    const items = reactive([
      {id: 1, message: 'Java'},
      {id: 2, message: 'HTML'},
      {id: 3, message: 'CSS'},
      {id: 4, message: 'JavaScript'},                        
    ]);

    const evenItems = computed(
      () => items.filter(item => item.id % 2 === 0));

    const myObject = reactive({
      title: '제목',
      author: '홍길동',
      publishedAt : '2016-01-01',
    })

    return {items, evenItems, myObject}
  }
}
</script>

<style lang="scss" scoped>

</style>