<template>
	<!-- 4. 내장객체로 부모컴포넌트 속성 출력-->
	<div>부모 $parent : {{ $parent }}</div>
	<!-- 부모 컴포넌트에 선언된 과일 출력-->
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script setup>
import { ref } from 'vue';
const message = ref('Hello ~!');
const sayHello = () => {
	alert(message.value);
};

//setup 속성을 사용하면 defineExpose 로 노출해야 상위 컴포넌트에서 접근할 수있다.
defineExpose({ message: message, sayHello: sayHello });
</script>

<style lang="scss" scoped></style>
