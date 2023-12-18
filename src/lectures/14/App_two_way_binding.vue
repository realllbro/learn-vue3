<template>
	<div>
		<h1>input value</h1>
		<div>{{ inputValue }}</div>

		<h2>v-bind 단방향</h2>
		<!-- v-bind(:) 단방향으로 했을시에는 v-on(@) 이벤트와 병행 해야 했다.-->
		<input
			type="text"
			:value="inputValue"
			@input="event => (inputValue = event.target.value)"
		/>
		<br />

		<h2>v-model 양방향</h2>
		<!-- v-model-->
		<input type="text" v-model="inputValue" />

		<br />
		<br />
		<hr />
		<!------------------------------------->
		<h1>textarea value</h1>
		<div>{{ textareaValue }}</div>
		<h2>v-bind 단방향</h2>
		<!-- v-bind(:) 단방향으로 했을시에는 v-on(@) 이벤트와 병행 해야 했다.-->
		<textarea
			:value="textareaValue"
			@input="event => (textareaValue = event.target.value)"
		></textarea>

		<h2>v-model 양방향</h2>
		<textarea v-model="textareaValue"></textarea>

		<br />
		<br />
		<hr />

		<!------------------------------------->
		<h1>checkbox value</h1>
		<h2>v-bind 단방향</h2>
		<!-- v-bind(:) 단방향으로 했을시에는 v-on(@) 이벤트와 병행 해야 했다.-->
		<label for="checkbox">{{ checkboxValue }}</label>
		<input
			type="checkbox"
			id="checkbox"
			:checked="checkboxValue"
			@change="event => (checkboxValue = event.target.checked)"
		/>
		<h2>v-model 양방향</h2>
		<!-- v-model 에서 true, false value 는 잘 되는데 v-bind 에서는 event 에서 true, false 값이 넘어감.-->
		<label for="checkbox1">{{ checkboxValue1 }}</label>
		<input
			type="checkbox"
			id="checkbox1"
			v-model="checkboxValue1"
			true-value="Yes"
			false-value="No"
		/>

		<h2>checkbox 멀티</h2>
		<div>{{ checkboxValues }}</div>
		<label>
			<input type="checkbox" value="html" v-model="checkboxValues" /> HTML
		</label>
		<label>
			<input type="checkbox" value="css" v-model="checkboxValues" /> CSS
		</label>
		<label>
			<input type="checkbox" value="javascript" v-model="checkboxValues" />
			JavaScript
		</label>

		<br />
		<br />
		<hr />

		<!------------------------------------->
		<h1>radio value</h1>
		<div>{{ radioValue }}</div>
		<h2>v-bind 단방향</h2>
		<!-- v-bind(:) 단방향으로 했을시에는 v-on(@) 이벤트와 병행 해야 했다.-->
		<label>
			<input
				type="radio"
				name="type"
				value="O"
				:checked="radioValue === 'O'"
				@change="event => (radioValue = event.target.value)"
			/>
			O형
		</label>
		<label for="radio">
			<input
				type="radio"
				name="type"
				value="A"
				:checked="radioValue === 'A'"
				@change="event => (radioValue = event.target.value)"
			/>
			A형
		</label>

		<h2>v-model 양방향</h2>
		<label>
			<input type="radio" name="type1" value="O" v-model="radioValue" />
			O형
		</label>
		<label for="radio">
			<input type="radio" name="type1" value="A" v-model="radioValue" />
			A형
		</label>

		<br />
		<br />
		<hr />

		<!------------------------------------->
		<h1>select value</h1>
		<div>{{ selectValue }}</div>
		<h2>v-bind 단방향</h2>
		<!-- v-bind(:) 단방향으로 했을시에는 v-on(@) 이벤트와 병행 해야 했다.-->
		<select
			:value="selectValue"
			@change="event => (selectValue = event.target.value)"
		>
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>

		<h2>v-model 양방향</h2>
		<select v-model="selectValue">
			<option value="html">HTML 수업</option>
			<option value="css">CSS 수업</option>
			<option value="javascript">JavaScript 수업</option>
		</select>

		<br />
		<br />
		<hr />
	</div>
</template>

<script>
import { ref } from 'vue';

export default {
	setup() {
		const inputValue = ref(null);
		const textareaValue = ref(null);
		const checkboxValue = ref(true);
		const checkboxValue1 = ref('Yes');
		const checkboxValues = ref([]);
		const radioValue = ref('O');
		const selectValue = ref('html');
		return {
			inputValue,
			textareaValue,
			checkboxValue,
			checkboxValue1,
			radioValue,
			selectValue,
			checkboxValues,
		};
	},
};
</script>

<style lang="scss" scoped></style>
