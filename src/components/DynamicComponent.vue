<template>
    <div class="container py-4">
        <button class="btn btn-primary me-2" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">바나나</button>
        <hr/>
        <component :is="currentComp"></component>
    </div>
</template>

<script setup>
import {ref, shallowRef} from 'vue';
import DynamicApple from './DynamicApple.vue';
import DynamicBanana from './DynamicBanana.vue';

// ref 보다 shallowRef 가 퍼포먼스 측면에서 더 좋다.
const currentComp = shallowRef(DynamicApple);

// ref는 속성이 변경되도 반응하지만 , 
// shallowRef 는 값 자체가 변경되어야 반응한다.
const obj1 = ref({name:'홍길동'});
const obj2 = shallowRef({name:'김길동'});
const changeCurrentComp = comp => (currentComp.value = comp);
</script>

<style lang="scss" scoped>

</style>