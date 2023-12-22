<template>
	<div class="container py-4">
		<input ref="inputRef" type="text" value="hello world!" />
		<hr />
		<button @click="visible = !visible">Toggle Click</button>
		<LifecycleChild v-if="visible"></LifecycleChild>
		<p id="message">{{ message }}</p>
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from 'vue';

import LifecycleChild from './LifecycleChild.vue';

export default {
	components: {
		LifecycleChild,
	},

	//vue3 부터
	setup() {
		console.log('setup');
		const inputRef = ref(null);
		const message = ref('');
		const visible = ref(false);

		/* ==================== Create =======================*/
		// 컴포넌트가 마운트 전이라 접근 안됨.
		onBeforeMount(() => {
			console.log('onBeforeMount', inputRef.value);
		});
		//컴포넌트가 마운트된 후라 접근 가능
		onMounted(() => {
			console.log('onMounted', inputRef.value, inputRef.value.value);
		});

		/* ==================== Update =======================*/
		onBeforeUpdate(() => {
			//반응형 데이터의 변경사항은 가져올 수 있다.
			console.log('onBeforeUpdate', message.value);
			//돔 컨텐츠의 변경전에 호출되기 때문에 빈값을 가져옴
			console.log(
				'Dom Content: ',
				document.querySelector('#message').textContent,
			);
		});
		onUpdated(() => {
			//반응형 데이터의 변경사항은 가져올 수 있다.
			console.log('onUpdated', message.value);
			//돔 컨텐츠의 변경후에 호출되기 때문에 값을 가져옴
			console.log(
				'Dom Content: ',
				document.querySelector('#message').textContent,
			);
		});

		return { inputRef, message, visible };
	},
	/*
	//vue2 시절 beforeCreate(), created()
	data: () => ({
		hereMsg: '하이',
	}),
	beforeCreate() {
		//컴포넌트가 초기화 될때 라서 data 옵션 처리전이라 hereMsg에 객체 접근 안됨.
		console.log('beforeCreate', this);
		console.log('beforeCreate', this.hereMsg);
	},
	created() {
		//data 옵션을 처리한 후라  접근 됨.
		console.log('created', this.hereMsg);
	},
	*/
};
</script>

<style lang="scss" scoped></style>
