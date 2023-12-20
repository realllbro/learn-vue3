<template>
	<div class="card">
		<div class="card-body">
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
console.log('AppCard module');

import { useCssModule } from 'vue';
export default {
	setup() {
		console.log('AppCard setup()');
		// style 모듈 객체로 선언시.
		const style = useCssModule();
		console.log('style : ', style);

		return { style };
	},
};
</script>
<!-- module 속성을 적용하면 스타일 내장 객체 속성에 포함된다.
  $style 로 접근가능  ex) {{ $style.red }} -->
<style module>
.red {
	color: red !important;
}
</style>
