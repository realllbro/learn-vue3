<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button">My Button</button>

		<!-- {{ $attrs 로 속성 상속받기 v-bind에 객체로 맵핑하면 자동으로 다중 속성이 바인딩 된다.}}-->
		<!--
		<button v-bind="$attrs" class="btn btn-primary" type="button">
			My Button
		</button>
		-->
		<button class="btn btn-primary" type="button">My Button</button>
	</div>
</template>

<script>
export default {
	// 속성 상속 안받음 옵션
	//inheritAttrs: false,

	// Non-Prop 속성 inheritAttrs: false 거부 후 골라서 받기.
	setup(props, context) {
		console.log('context.attrs', context.attrs);
		console.log('class', context.attrs.class);
		console.log('id', context.attrs.id);
		console.log('onClick', context.attrs.onClick);
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
