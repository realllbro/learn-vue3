<template>
	<div class="p-3 bg-danger">
		<button class="btn btn-primary" type="button">
			My Button {{ message }}
		</button>

		<!-- {{ $attrs 로 속성 상속받기 v-bind에 객체로 맵핑하면 자동으로 다중 속성이 바인딩 된다.}}-->
		<!--
		<button v-bind="$attrs" class="btn btn-primary" type="button">
			My Button
		</button>
		--></div>
</template>

<!-- inheritAttrs 옵션 사용을 위한 <script>, <script setup> 동시 사용 -->
<script>
export default {
	// 속성 상속 안받음 옵션
	inheritAttrs: false,
};
</script>

<script setup>
import { ref } from 'vue';
const message = ref('message');
</script>

<style lang="scss" scoped></style>
