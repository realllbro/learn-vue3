<template>
	<div class="row g-3">
		<div class="col col-2">
			<select
				v-model="type"
				class="form-select"
				aria-label="Default select example"
			>
				<option value="news">뉴스</option>
				<option value="notice">공지사항</option>
			</select>
		</div>
		<div class="col col-8">
			<input type="text" class="form-control" v-model="title" />
		</div>
		<div class="col col-2 d-grid">
			<!-- context emit 사용 -->
			<button class="btn btn-primary" @click="createPost">추가</button>
		</div>
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	// emits 옵션을 사용해서 이벤트 선언
	// emits: ['createPost'],

	// 객체 문법으로 하면 함수를 이용해 validation 을 추가할 수 있다.
	emits: {
		// 부모페이지에 createPost 호출하기전 실행된다.
		createPost: newPost => {
			if (!newPost.type) {
				return false;
			} else if (!newPost.title) {
				return false;
			}
			return true;
		},
		/* 이벤트 선언은 선택사항이지만 vue 진영에서는 
       모든 이벤트를 선언하는걸 가이드 하고 있다.
       유효성 체크가 없을경우 null 로 선언
    createPost: null,
    */
	},

	// 객체를 구조 분해해서 emit만 넘겨서 사용할 수도 있다.
	setup(props, { emit }) {
		const type = ref('news');
		const title = ref('');

		//context.emit
		const createPost = () => {
			const newPost = {
				type: type.value,
				title: title.value,
			};
			emit('createPost', newPost);

			//입력폼 초기화
			type.value = 'news';
			title.value = '';
		};
		return { createPost, title, type };
	},
};
</script>

<style lang="scss" scoped></style>
