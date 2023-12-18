<template>
  <div>
    <h2>반응형 메시지</h2>
    <p>{{reactiveMessage}}</p>
    <button v-on:click="addReactiveMessage">Add Message</button>
    <h2>일반 메시지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click="addNomalMessage">Add Message</button>    
  </div>
</template>

<script>
import { isRef, onBeforeMount, onMounted, ref } from 'vue';
export default {
  setup(){

    console.log('setup()');

    // 반응형 상태 선언
    const reactiveMessage = ref("Hello Reactive Message");
    const addReactiveMessage = () => {
      reactiveMessage.value = reactiveMessage.value + '!';
    };

    // 일반 변수 선언
    let normalMessage = 'Hello Normal Message';   
    const addNomalMessage = () => {
      normalMessage = normalMessage.value + '!';
    };     

    console.log('isRef(reactiveMessage): ', isRef(reactiveMessage)); // true
		console.log('isRef(normalMessage): '  , isRef(normalMessage)); // false

    onMounted(()=> {
      console.log('onMounted');
    })
    onBeforeMount(()=>{
      console.log('onBeforeMount');
    })
  
    return {
      reactiveMessage,
      normalMessage,
      addReactiveMessage,
      addNomalMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>
