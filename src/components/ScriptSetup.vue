<template>
	<div class="container py-4">
		{{ msg }}
		<br />
		{{ message }}
		<input v-model="message" type="text" />
		<button @click="sayHello">click</button>
		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>

		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>

		<PostItem
			type="news"
			title="제목"
			contents="내용"
			:is-like="true"
		></PostItem>
		<hr />
		<TemplateRefsChild ref="child"></TemplateRefsChild>
		<template v-if="child">{{ child.message }}</template>
		<hr />
		<MyButton class="parent-class"></MyButton>
	</div>
</template>

<!-- setup 속성을 선언하면 
    setup() 함수안에 작성한거와 같이 컴파일 된다. -->
<script setup>
import { ref } from 'vue';

//미 설치시 npm i axios 로 설치
import axios from 'axios';

// script setup 내부에서는
// 1.컴포넌트 따로 선언안하고 import만 해도 사용가능.
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefsChild from '@/components/setup/TemplateRefsChild.vue';
import MyButton from '@/components/setup/MyButton.vue';

// 2.리턴문에 선언 안해도 됨.
const message = ref('');
const msg = 'Hello World!';
const sayHello = () => {
	alert('Hello World!');
};
const child = ref(null);

defineExpose({ msg });
const response = await axios(
	'https://dummy.restapiexample.com/api/v1/employees',
);
console.log('response', response);
</script>

<style lang="scss" scoped></style>
