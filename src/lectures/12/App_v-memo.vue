<template>
  <div>
      <button @click="subscribers++">subs++</button>
      <button @click="views++">views++</button>
      <button @click="likes++">likes++</button>
      
      <!-- 일반 -->         
      <div>
        <p>subscribers: {{ subscribers }}</p>
        <p>views: {{ views }}</p>
        <p>likes: {{ likes }}</p>                
      </div>          

      <!-- v-once 로 지정시 반응형 데이터가 변경되도 
        다시 렌더링 되지 않는다.-->   
      <hr>        
      <div v-once>
        <p>subscribers: {{ subscribers }}</p>
        <p>views: {{ views }}</p>
        <p>likes: {{ likes }}</p>                
      </div>

      <!-- v-memo 로 지정시 선언한 데이터가 변경될 때만 
        범위안에 요소들이 다시 렌더링 된다.
        공식문서에는 성능 최적화가 필요할 때만 사용을 권장하고 있다.
        v-for 에서 목록을 렌더링 할 때 그 길이가 1,000개 이상일 때 사용하면 좋다고 안내하고 있다.
      -->         
      <hr>
      <div v-memo="[subscribers]">
        <p>subscribers: {{ subscribers }}</p>
        <p>views: {{ views }}</p>
        <p>likes: {{ likes }}</p>                
      </div>
  
  </div>
</template>

<script>
import {ref} from 'vue';

export default {
  setup () {
    const subscribers = ref(4000);
    const views = ref(400)
    const likes = ref(20)

    return {subscribers, views, likes}
  }
}
</script>

<style lang="scss" scoped>

</style>