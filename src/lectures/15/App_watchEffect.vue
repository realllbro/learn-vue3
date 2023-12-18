<template>
	<div>
		<!-- @submit.prevent=save(title, contents) 로 하면 함수만 실행시키고 기본기능인 서브밑은 안한다.-->
		<form action="" @submit.prevent>
			<input v-model.lazy="title" type="text" placeholder="Title" />
			<br />
			<textarea v-model.lazy="contents" placeholder="Contents"></textarea>
			<hr />
			<button @click="save(title, contents)">저장</button>
		</form>
	</div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
	setup() {
		const title = ref('');
		const contents = ref('');

		//버튼으로 저장실행
		const save = (title, contents) => {
			console.log('저장되었습니다. title: ${title}, contents: ${contents}');
		};

		//watchEffect 으로 저장 실행
		//watch 와는 다르게 최초에도 실행된다.
		//watch 는 명시한 반응형 데이터에 반응하지만
		//watchEffect는 콜백함수로 구현된 내부에서 사용되거나 선언한 반응형 데이터에 대해 반응한다.
		watchEffect(() => {
			console.log('watchEffect');
			console.log(title.value);

			//save(title.value, contents.value);
		});

		return { title, contents, save };
	},
};
</script>

<style lang="scss" scoped></style>
