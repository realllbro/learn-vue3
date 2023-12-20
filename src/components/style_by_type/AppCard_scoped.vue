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
console.log('AppCard scoped');

export default {
	setup() {
		console.log('AppCard setup()');
		return {};
	},
};
</script>
<!-- scoped 속성을 적용하면 해당 파일에서만 동작한다. -->
<style scoped>
.red {
	color: red !important;
}
</style>
