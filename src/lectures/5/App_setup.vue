<template>
  <div>
    <p>{{ counter }}</p>

    <p>{{ message }}</p>

    <button @click="increment"> click!</button>
  </div>

</template>

<script>
import {ref} from 'vue';

export default {
  setup () {
    //반응형 변수 선언
    const counter = ref(0);
    const message = ref('Hello Vue3');

    //메서드 선언
    const increment = () => {
      counter.value++;
    };
    
    return {
      counter,
      message,
      increment,
    }
  },
  //Options Api 에서 this 키워드로 접근
  mounted() {
  console.log(this.count) // 0
  }    
}
</script>

<style lang="scss" scoped>

</style>