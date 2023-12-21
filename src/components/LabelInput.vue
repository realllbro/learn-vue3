<template>
	<label class="form-label" id="child-id">
		{{ label }}
		<!-- 1.v-model 로 구현시 
		<input v-model="username" type="text" />
    -->
		<!-- 2.v-model 내부적 구현 다시보기.
				<input
					:value="username"
					@input="event => (username = event.target.value)"
					type="text"
				/>
		-->
		<!-- 3.modelValue, update:modelValue 를 이용한 데이터 핸들링 하기 		
		<input
			:value="modelValue"
			@input="event => $emit('update:modelValue', event.target.value)"
			type="text"
		/>
    -->
		<!-- 4.computed 사용 
		<input v-model="value" type="text" class="form-control" />
		-->
	</label>
	<!-- 다중 루트일 경우 Non-Props 속성은 지정해 줘야 한다. v-bind="$attrs"-->
	<input v-model="value" v-bind="$attrs" type="text" class="form-control" />
</template>

<script>
import { computed } from 'vue';

export default {
	// vue3 는
	// props의 modelValue 로 값을 받을 수 있고
	// vue2 에서는 modelValue -> value 이었다.
	// emits의 update:modelValue 로  이벤트를 발생 시킬수 있다.(값을 업데이트 할 수 있다.)
	// vue2 에서는 update:modelValue -> @input 이었다.
	props: ['modelValue', 'label'],
	emits: ['update:modelValue'],
	setup(props, { emit }) {
		//computed는 읽기 전용이지만 get/set 정의해서 쓰기가능하게 사용하자.
		const value = computed({
			get() {
				return props.modelValue;
			},
			set(value) {
				emit('update:modelValue', value);
			},
		});
		return { value };
	},
};
</script>

<style lang="scss" scoped></style>
