<template>
	<div class="card">
		<div class="card-body">Lifecycle Child</div>
		<input id="input" type="text" />
	</div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

export default {
	setup() {
		console.log('[Child] setup');

		/* ==================== Mounting =======================*/
		// 컴포넌트가 마운트 전이라 접근 안됨.
		onBeforeMount(() => {
			console.log('[Child] onBeforeMount');
		});
		//컴포넌트가 마운트된 후라 접근 가능
		onMounted(() => {
			console.log('[Child] onMounted');
		});

		/* ==================== unMounting =======================*/
		onBeforeUnmount(() => {
			console.log('[Child] onBeforeUnmount');
			console.log(document.querySelector('#input'));
		});
		onUnmounted(() => {
			console.log('[Child] onUnmounted');
			console.log(document.querySelector('#input'));
		});

		return {};
	},
};
</script>

<style lang="scss" scoped></style>
