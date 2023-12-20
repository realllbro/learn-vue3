<template>
	<div class="card">
		<div class="card-body">
			<!-- 타이틀 색상 동적 변경 -->
			<h5 class="card-title red">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
console.log('AppCard v-bind');

import { ref } from 'vue';
export default {
	setup() {
		console.log('AppCard setup()');

		// v-bind 로 반응형 객체 사용시.
		const color = ref('red');
		color.value = 'yellow';

		return { color };
	},
};
</script>

<!-- css v-bind 속성 사용시.-->
<style>
.red {
	color: v-bind(color) !important;
}
</style>
