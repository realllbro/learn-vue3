<template>
	<div>
		<p>{{ message }}</p>
		<p>{{ reverseMessage }}</p>
	</div>
</template>

<script>
import { ref, watch, computed } from 'vue';

export default {
	setup() {
		const message = ref('Hello Vue3');
		const reverseMessage = ref('');

		// 1.immediate 옵션으로 최초 실행 하거나
		watch(
			message,
			newValue => {
				console.log('즉시실행함!!!');
				reverseMessage.value = newValue.split('').reverse().join('');
			},
			{
				//최초에 한번 watch 즉시 실행 옵션
				immediate: true,
			},
		);

		// 2.메소드로 최초 실행 또는
		const reverseFunction = str => {
			console.log('메소드로 실행!!!' + str);
			reverseMessage.value = str.split('').reverse().join('');
		};

		// 3.computed 활용
		reverseMessage.value = computed(() =>
			message.value.split('').reverse().join(''),
		);

		reverseFunction(message.value);

		return { message, reverseMessage };
	},
};
</script>

<style lang="scss" scoped></style>
