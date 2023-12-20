<template>
	<main>
		<div class="container py-4">
			<PostCreate @create-post="createPost"></PostCreate>
			<div class="container text-center">
				<div class="row g-3">
					<div v-for="post in posts" :key="post.id" class="col col-4">
						<!-- 컴포넌트는 파스칼 케이스 또는 카멜케이스로 선언하면 사용가능하다.
								 속성명 isLike는 카멜케이스로 선언하고 가져다 쓸때는 케밥케이스 사용한다.
								 @자식 페이지에서 emit 메소드를 활용해서 부모페이지에 이벤트 실행 할 수 있다.
						-->
						<AppCard
							:title="post.title"
							:contents="post.contents"
							:type="post.type"
							:is-like="post.isLike"
							@toggle-like="post.isLike = !post.isLike"
						></AppCard>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import AppCard from './AppCard.vue';
//import PostCreate from './PostCreate.vue';
import PostCreate from '@/components/PostCreate.vue';
//import AppCard_module from './style_by_type/AppCard_module.vue';
//import AppCardvbind from './style_by_type/AppCard_v-bind.vue';
import { reactive } from 'vue';

export default {
	components: {
		AppCard,
		PostCreate,
	},
	setup() {
		const post = reactive({
			title: '제목2',
			contents: '내용2',
		});
		const posts = reactive([
			{ id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
			{ id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
			{ id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
			{ id: 4, title: '제목4', contents: '내용4', isLike: true, type: 'news' },
			{
				id: 5,
				title: '제목5',
				contents: '내용5',
				isLike: false,
				type: 'notice',
			},
			{ id: 6, title: '제목6', contents: '내용6', isLike: false, type: 'news' },
		]);
		const createPost = (a, b, c, d) => {
			console.log('createPost');
			console.log('a', a);
			console.log('b', b);
			console.log('c', c);
			console.log('d', d);
		};
		return { post, posts, createPost };
	},
};
</script>

<style lang="scss" scoped></style>
