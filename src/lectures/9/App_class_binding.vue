<template>
  <div>
    <!-- 클래스명에 특수문자가 포함되면 싱글 쿼테이션으로 감싼다. -->
    <div class="text" :class="{active:isActive, 'text-danger':hasError}">텍스트 입니다.</div>
    <button v-on:click="toggle">toggle</button>
    <button v-on:click="hasError = !hasError">toggleError</button>    

    <div class="text" :class="classObject">오브젝트 텍스트 입니다.</div>
    <div class="text" :class="classObject2">computed 텍스트 입니다.</div>

    <div class="text" :class="[isActive ? 'active-class' : 'class', activeClass,errorClass]">배열 테스트 입니다.</div>
    
  </div>
</template>

<script>
import {reactive, ref, computed} from 'vue';

export default {
  setup () {
    const isActive = ref(true);
    const hasError = ref(false);
    const classObject = reactive({
      active:true,
      'text-danger': true,
    });

    const classObject2 = computed(()=>{
      return {
        active: true && true,
        'text-danger':true && false,
      }
    });

    const activeClass = ref('active');
    const errorClass = ref('error');    


    const toggle = () => {
      isActive.value = !isActive.value;
    }
    return {isActive, toggle, hasError, classObject, classObject2, activeClass, errorClass};
  }
}
</script>

<style scoped>
  .active{
    font-weight: 900;
  }

  .text-danger{
    color: red;
  }

</style>