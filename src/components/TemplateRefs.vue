<template>
	<div class="container py-4">
		<input ref="input" type="text" />
		<p>{{ input }}</p>
		<!-- mount가 완료되기전까지 null 상태이기 때문에 
       input.value에 접근하면 오류가 발생한다. 
      v-if 로 처리. -->
		<p v-if="input">{{ input.value }}</p>

		<!-- $refs 내장객체로도 접근가능 -->
		<p v-if="input">$refs : {{ $refs.input.value }}</p>

		<!-- 반응형 데이터로 선언한 input 과 
        $refs 내장객체로 접근한 input 이 동일한 값인지 체크 -->
		<p v-if="input">input vs $refs : {{ $refs.input === input }}</p>

		<hr />
		<ul>
			<li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
		</ul>

		<!-- 1.렌더링이 끝나고 ref 문자열 반응형 객체에 담기 -->
		<ul>
			<li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li>
		</ul>

		<!-- 2.렌더링이 끝나고 함수에 담기 -->
		<ul>
			<li
				v-for="fruit in fruits"
				:key="fruit"
				:ref="el => itemRefs2.push(el.textContent)"
			>
				{{ fruit }}
			</li>
		</ul>
		<hr />
		<!-- 3.ref 속성으로 자식 컴포넌트 인스턴스에 접근     -->
		<TemplateRefsChild ref="child"></TemplateRefsChild>
	</div>
</template>

<script>
import TemplateRefsChild from './TemplateRefsChild.vue';
import { onMounted, ref } from 'vue';

export default {
	components: {
		TemplateRefsChild,
	},
	setup() {
		const input = ref(null);
		console.log('setup:', input.value);

		// DOM 요소가 렌더링 된 이후에 접근할 수 있기 때문에
		// onMounted 메소드에서 접근한다.
		onMounted(() => {
			input.value.value = 'Hello World!';
			console.log('onMounted: ', input.value);

			// 1.렌더링이 끝나고 ref 반응형 객체에 담기
			itemRefs.value.forEach(item => console.log('1.item: ', item.textContent));

			// 2.렌더링이 끝나고 함수에 담기
			itemRefs2.value.forEach(item => console.log('2.item: ', item));

			// 3.ref 속성으로 자식 컴포넌트 인스턴스에 접근
			console.log('child.message: ', child.value.message);
			child.value.sayHello();
		});

		const fruits = ref(['사과', '딸기', '포도']);
		const itemRefs = ref([]);
		const itemRefs2 = ref([]);

		const child = ref(null);
		return { input, fruits, itemRefs, itemRefs2, child };
	},
};
</script>

<style lang="scss" scoped></style>
