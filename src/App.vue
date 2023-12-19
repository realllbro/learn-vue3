<template>
	<div>
		<!-- 3.등록한 컴포넌트 사용 -->
		<TheNav></TheNav>
		<TheView></TheView>
	</div>
</template>

<script>
// 1.지역컴포넌트 선언
import TheNav from './components/TheNav.vue';
import TheView from './components/TheView.vue';

export default {
	// 2.컴포넌트 등록
	// key : value 형식으로 등록이지만 key, value 값이 같으면 하나만 등록 (ES6 단축표현 기능)
	components: {
		TheNav,
		TheView,
	},
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
