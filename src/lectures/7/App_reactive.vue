<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <br>
    <button v-on:click="increment">Deep Click {{ state.deep.count }}</button>    
  </div>
</template>


<script>

import { reactive } from 'vue';

export default {

  /* Options APi 문법
  Options APi에서는 반응형 객체를 선언할 때 
  데이터라는 옵션의 객체를 return 해서 선언 하는데
  내부적으로 반환된 객체는 reactive로 감싸진다고 보면 된다.
  data(){
    return{
      
    }
  }
  */

  setup () {
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      }
    });

    const increment = () => {
      state.count++;
      state.deep.count++;      
    };

    return {
      state,
      increment,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>