<template>
  <div>
    <h2>reactive 사용</h2>
    <p>{{ reactive_message }}</p>
    <button v-on:click="addMessage1">add click</button>

    <hr>
    <h2>ref 사용 </h2>
    <p>{{ ref_message }}</p>
    <button v-on:click="addMessage2">add click</button>    
  </div>
</template>

<script>

import { ref, reactive } from 'vue';

export default {
  setup () {
    // 1.템플릿에서 사용
    let reactive_message = reactive('Hello Vue!');
    const addMessage1 = () => {
      reactive_message = reactive_message + '!';
    };
    console.log('reactive_message: ', reactive_message);
    console.log('reactive_message typeof: ', typeof reactive_message);    

    let ref_message = ref('Hello Vue!');
    const addMessage2 = () => {
      ref_message.value = ref_message.value + '!';
    };
    console.log('ref_message: ', ref_message);
    console.log('ref_message typeof: ', typeof ref_message.value);        

    // 2.반응형 객체의 ref Unwrapping
		// ref -> Object
    // Object, 객체 타입은 unraffing 이 됨 .value 로 접근 안된다.
    const count = ref(0);
    const state = reactive({
      //key와 값이 같으면 선언시 생략가능하다. count: count => count로 선언가능
      count,
    });
    console.log(count.value);
    console.log('state.count: ', state.count.value); // X
    console.log('state.count: ', state.count);       // O 
    
    // 3.배열 및 컬렉션의 참조 Unwrapping
    // ref -> Array
    // 배열 및 컬렉션 타입은 unraffing 되지 않아 .value 로 접근
    const message = ref('Hello');
    const arr = reactive([message]);    
    console.log('arr[0]', arr[0]);        // X
    console.log('arr[0]', arr[0].value);  // O

    return{
      reactive_message,
      addMessage1,
      ref_message,
      addMessage2,      
    };
  },
};
</script>

<style lang="scss" scoped>

</style>