<template>
	<div class="card">
		<div class="card-body">
			<!-- module="classes" 변수명으로 접근 "classes.red" -->
			<h5 class="card-title" :class="classes.red">Card title</h5>
			<p class="card-text">
				Some quick example text to build on the card title and make up the bulk
				of the card's content.
			</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
console.log('AppCard module2');

export default {
	setup() {
		console.log('AppCard setup()');

		return {};
	},
};
</script>

<!-- module 속성을 적용시 변수명을 지정 하면 해당 명칭으로 사용가능하다.
  classes 로 접근가능  ex) {{ classes }} -->
<style module="classes">
.red {
	color: red !important;
}
</style>
