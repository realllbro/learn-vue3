<template>
	<div>
		<!--
      엔터키가 눌렸을때만 배열에 이벤트르 실행한다. 
    -->
		엔터키 눌렸을때만 이벤트 실행: <input type="text" @keyup.enter="addTodo" />
		<br />
		키보드 눌리면 실행 되고 엔터 치면 배열에 푸쉬:
		<input type="text" @keyup="addTodo" />

		<br />
		ctrl+enter 해야 이벤트 실행 배열에 푸쉬:
		<input type="text" @keyup.ctrl.enter="addTodo" />
		<ul>
			<li v-for="(todo, index) in todos" :key="index">
				{{ todo }}
			</li>
		</ul>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const todos = reactive([]);

		const addTodo = event => {
			console.log('event.key', event.key);

			// 엔터키가 눌렸을때만 배열에 저장한다.
			if (event.key === 'Enter') {
				todos.push(event.target.value);
			}
		};

		return { todos, addTodo };
	},
};
</script>

<style lang="scss" scoped></style>
