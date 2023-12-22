<template>
	<!-- 4. 내장객체로 부모컴포넌트 속성 출력-->
	<div>부모 $parent : {{ $parent }}</div>
	<!-- 부모 컴포넌트에 선언된 과일 출력-->
	<ul>
		<li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
	</ul>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const message = ref('Hello ~!');
		const sayHello = () => {
			alert(message.value);
		};
		return { message, sayHello };
	},
};
</script>

<style lang="scss" scoped></style>
