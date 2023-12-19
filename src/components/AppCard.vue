<template>
	<div class="card">
		<div class="card-body">
			<span class="badge bg-secondary">뉴스, 공지사항</span>
			<h5 class="card-title mt-2">{{ title }}</h5>
			<p class="card-text">{{ contents }}</p>
			<a href="#" class="btn btn-primary">Go somewhere</a>
		</div>
	</div>
</template>

<script>
import { reactive } from 'vue';

export default {
	props: ['title', 'contents'],
	setup() {
		return {};
	},
};
</script>

<style></style>
