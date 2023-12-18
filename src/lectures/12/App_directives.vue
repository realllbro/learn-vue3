<template>
  <div>
    <!-- v-text : 텍스트를 출력할 때 이중중괄호를 이용하거나 v-text 
      디렉티브를 사용하면 된다.-->
    <p>{{ msg }}</p>
    <p v-text="msg"></p>

    <!-- v-html : html 코드를 출력할 때 inline 으로 하려면 v-html, 
        html 문자열 그대로 나타내려면 v-text 디렉티브를 사용하면 된다.-->    
    <hr>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>        

    <!-- v-pre : 이 엘리먼트와 모든 자식 엘리먼트의 컴파일을 생략한다. 
        안에 내용이 그대로 출력됨. -->
    <p v-pre>{{ msg 안녕하세요}}</p>

    <!-- v-once : 최초 한번만 렌더링 하고 정적인 상태로 변경된다. (이후 변경사항 적용안됨)-->
    <p v-once>{{ msg }} !!!!</p>
  </div>
</template>

<script>

import {ref} from 'vue';

export default {
  setup () {
    const msg = ref("안녕하세요");
    const htmlStr = ref('<strong>안녕!!!</strong>')

    return {msg, htmlStr};
  }
}
</script>

<style lang="scss" scoped>

</style>