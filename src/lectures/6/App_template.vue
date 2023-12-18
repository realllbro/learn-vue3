<template>
  <div>
    <h2>보간법</h2>
    <!--갱신 -->
    <p>{{message }}</p>

    <!--일회성 -->
    <p v-once>{{message }}</p>
    <button v-on:click="message = message + '!'">click</button>

    <hr>
    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>    
    
    <hr>
    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTitle">마우스를 올려보세요.</div>
    <input type="text" value="홍길동" v-bind:disabled="isInputDisabled" />

    <hr>
    <h2>단축속성</h2>    
    <!--단축속성 -->
    <div :title="dynamicTitle">마우스를 올려보세요.</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />    

    <!--다중속성 -->
    <hr/>
    <h2>다중속성</h2>
    <input :="attrs" />    

    <!--javascript 표현식 사용-->
    <hr/>
    <h2>javascript 표현식 사용</h2>
    {{ message.split('') }}
    <br>
    {{ message.split('').reverse().join('') }}
    <br>
    isInputDisabled 현재값 : {{ isInputDisabled ? 'true' : 'false' }}
    <br>


  </div>
</template>

<script>
import {ref } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요!');
    const rawHtml = ref('<strong>안녕하세요</strong>');

    const dynamicTitle = ref('안녕하세요@@@@!!!');
    const isInputDisabled = ref(false);
    const attrs = ref({
      type: 'text',
      value: '밸류값',
      disabled: true,            
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  }
}
</script>

<style lang="scss" scoped></style>