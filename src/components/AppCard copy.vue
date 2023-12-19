<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
console.log('AppCard module');

import { useCssModule, ref } from 'vue';
export default {
	setup() {
		console.log('AppCard setup()');

		// style 모듈 객체로 선언시.
		// const style = useCssModule();
		// console.log('style : ', style);

		// v-bind 로 반응형 객체로 사용시.
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

<!-- scoped 속성을 적용하면 해당 파일에서만 동작한다.
<style scoped>
.red {
	color: red !important;
}
</style>
-->

<!-- module 속성을 적용하면 스타일 내장 객체 속성에 포함된다.
  $style 로 접근가능  ex) {{ $style.red }}
<style module>
.red {
	color: red !important;
}
</style>
-->

<!-- module 속성을 적용시 변수명을 지정 하면 해당 명칭으로 사용가능하다.
  classes 로 접근가능  ex) {{ classes }}
<style module="classes">
.red {
	color: red !important;
}
</style>
-->
