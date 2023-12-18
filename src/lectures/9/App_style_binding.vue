<template>
  <div :style="styleObject">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vel. Molestiae excepturi possimus ipsam. Sit, perferendis. Non ad fuga obcaecati dolores alias fugiat impedit fugit iure repellendus animi. Tenetur, quis.</div>
  </div>
  <button v-on:click="fontSize++">+</button>
  <button v-on:click="fontSize--">-</button>  
  <div :style="styleObject2">
    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vel. Molestiae excepturi possimus ipsam. Sit, perferendis. Non ad fuga obcaecati dolores alias fugiat impedit fugit iure repellendus animi. Tenetur, quis.</div>
  </div>
</template>

<script>
import { reactive,computed,ref } from 'vue';

export default {
  setup () {
    const styleObject = reactive({
      color: 'red',
      fontSize: '13px',
    });
    const fontSize = ref(13);
    const styleObject2 = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px',
      }
    });

    return {styleObject, styleObject2, fontSize}
  }
}
</script>

<style lang="scss" scoped>

</style>