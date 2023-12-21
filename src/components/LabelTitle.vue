<template>
	<label>
		{{ label }}
		<input v-model="value" type="text" />
	</label>
</template>

<script>
import { computed } from 'vue';

export default {
	// vue3 는
	// props의 title 로 값을 받을 수 있고
	// emits의 update:title 로  이벤트를 발생 시킬수 있다.(값을 업데이트 할 수 있다.)
	props: ['title', 'label'],
	emits: ['update:title'],
	setup(props, { emit }) {
		//computed는 읽기 전용이지만 get/set 정의해서 쓰기가능하게 사용하자.
		const value = computed({
			get() {
				return props.title;
			},
			set(value) {
				emit('update:title', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
