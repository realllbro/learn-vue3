<template>
	<div class="container py-4">
		<div class="card">
			<div class="card-header">provideInject Component</div>
			<div class="card-body">
				<button @click="count++">Click</button>
				<p>appMessage : {{ appMessage }}</p>
				<Child></Child>
			</div>
		</div>
	</div>
</template>

<script>
import Child from '@/components/Child.vue';
import { ref, provide, readonly, inject } from 'vue';

export default {
	components: {
		Child,
	},
	setup() {
		const staticMessage = 'static message';
		const message = ref('message');
		const count = ref(10);

		// 하위 컴포넌트로 제공
		provide('static-message', staticMessage);
		provide('count', count);

		// provide로 제공하는 값을 자식창에서 수정하기보단 provide에서 변경할 수 있게
		// 메소드를 제공하자. (변경 못하게 하려면 readonly 사용)
		const updasteMessage = appendMessage => {
			message.value = message.value + appendMessage;
		};
		provide('message', { message, updasteMessage });
		provide('message', { message: readonly(message), updasteMessage });

		const appMessage = inject('app-message');

		return { count, appMessage };
	},
	mounted() {
		console.log('this.msg: ', this.msg);
	},
};
</script>

<style lang="scss" scoped></style>
