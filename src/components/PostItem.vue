<template>
	<div class="card">
		<div class="card-body">
			<!-- type : news, notice 값에 따라 표시 -->
			<span class="badge bg-secondary">{{ typeName }}</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn" :class="isLikeClass" @click="toggleLike"
				>좋아요</a
			>
		</div>
	</div>
</template>

<script>
import { computed, ssrContextKey } from 'vue';

export default {
	props: {
		type: {
			type: String,
			default: 'news',
			// 유효성 검사
			validator: value => {
				return ['news', 'notice'].includes(value);
			},
		},
		title: {
			type: String,
			required: true,
		},
		contents: {
			type: String,
			//required: true,
		},
		isLike: {
			type: Boolean,
			default: false,
		},
		//객체나 배열과 같은 래퍼런스 타입의 디폴트를 설정할 때는 기본 값을
		//반환하는 팩토리 함수를 설정해줘야 한다. "default: ''," 이렇게 하면 오류남
		obj: {
			type: Object,
			default: () => ({}),
		},
	},

	//emits선언
	emits: ['toggleLike'],

	//setup 함수안에서 사용하려면 첫번째 매개변수로 props를 받을 수 있다.
	setup(props, context) {
		console.log('props.title: ', props.title);
		const isLikeClass = computed(() =>
			props.isLike ? 'btn-danger' : 'btn-outline-danger',
		);
		const typeName = computed(() =>
			props.type === 'news' ? '뉴스' : '공지사항',
		);

		//단방향 데이터 흐름이라 데이터를 부모페이지 데이터를 변경할 수 없다.
		//setup 함수의 두번째 파라미터 context 객체안에 emit라는 메소드가 있다.
		//이를 활용해서 부모 페이지로 이벤트를 올릴 수 있다.
		const toggleLike = () => {
			context.emit('toggleLike');
		};

		return { isLikeClass, typeName };
	},
};
</script>

<style></style>
