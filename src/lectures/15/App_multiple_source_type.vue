<template>
	<div></div>
</template>

<script>
import { watch, ref, reactive } from 'vue';

export default {
	setup() {
		const x = ref(0);
		const y = ref(0);

		const obj = reactive({
			count: 0,
		});

		/* 파라메터 없이 데이터가 변경될때 getter() 함수로 적용시 */
		watch(
			() => x.value + y.value,
			(sum, oldValue) => {
				console.log('sum: ', sum);
				console.log('oldValue: ', oldValue);
			},
		);

		/* 배열로 선언 */
		watch([x, y], ([newX, newY], [oldX, oldY]) => {
			console.log('new : ', newX, newY);
			console.log('old : ', oldX, oldY);
		});

		/* Obj로 선언  
      Object로 선언해서 New, Old Value 비교시 둘다 
      같은 객체를 가르키기 때문에 같은 값이 출력된다.
    */
		watch(obj, (newValue, oldValue) => {
			console.log('newValue : ', newValue);
			console.log('oldValue : ', oldValue);
		});

		/* Obj에 count로 선언시 
      watch(obj.count, (newValue, oldValue) => { 이렇게 하면 반응형 데이터가 아니라 number로 인식해서 작동안됨.
      console.log(typeof obj.count) => number
      () => obj.count, 이렇게 getter()함수 사용으로 변경 
    */
		watch(
			() => obj.count,
			(newValue, oldValue) => {
				console.log('newValue : ', newValue);
				console.log('oldValue : ', oldValue);
			},
		);

		const person = reactive({
			name: '홍길동',
			age: 30,
			hobby: '운동',
			obj: {
				count: 0,
			},
		});

		// 오브젝트 최하위 뎁스까지 속성을 감시해서 자원낭비 심함.
		watch(person, newValue => {
			console.log('newValue: ', newValue);
		});

		// 오브젝트 getter() 함수로 사용시 지정한 특정값만 감시하며
		// 하위값이 변경되도 감시 되지 않는다.
		watch(
			() => person.obj,
			newValue => {
				console.log('newValue1: ', newValue);
			},
		);

		return { x, y, obj, person };
	},
};
</script>

<style lang="scss" scoped></style>
