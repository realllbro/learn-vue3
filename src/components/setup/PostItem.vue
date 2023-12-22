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
console.log('Normal Script Setup');
</script>

<script setup>
import { computed } from 'vue';

console.log('Script Setup');

// props, emits 대신 defineProps, defineEmits 선언 없이
// script setup 내부에서만 사용할 수 있는 컴파일러 매크로
// 기존 props 속성은 이렇게 선언 후 리턴받아서 사용할 수 있다.
const props = defineProps({
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
});

// 기존 context.emit 속성은 이렇게 선언 후 리턴받아서 사용할 수 있다.
const emit = defineEmits(['toggleLike']);

const isLikeClass = computed(() =>
	props.isLike ? 'btn-danger' : 'btn-outline-danger',
);
const typeName = computed(() => (props.type === 'news' ? '뉴스' : '공지사항'));
const toggleLike = () => {
	emit('toggleLike');
};
</script>

<style></style>
