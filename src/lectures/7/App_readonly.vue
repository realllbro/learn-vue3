<template>
  <div>

  </div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
  setup () {
    const original = reactive({
      count: 0,
    });

    // 읽기전용으로 복사가 돼서 데이터를 수정할 수 없고.
    // 원본 데이터가 변경되면 그 영향은 같이 받는다.
    const copy = readonly(original);

    original.count++;
    copy.count++;
    copy.count = 2;

    console.log("original.count : "+original.count);
    console.log("copy.count : "+copy.count);
    return {original};
  }
}
</script>

<style lang="scss" scoped>

</style>