<template>
	<div class="card">
		<div class="card-header">Deep Child Component</div>
		<div class="card-body">
			<p>staticMessage {{ staticMessage }}</p>
			<p>message {{ message }}</p>
			<p>count {{ count }}</p>
		</div>
	</div>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		// inject() 메소드로 상위 컴포넌트에서 provide 로 제공한 값을 받을 수 있다.
		// inject('key', ' null 일 때 사용할 기본값');
		const staticMessage = inject('static-message', 'default message');
		const count = inject('count');

		// provide로 제공받은 값은 자식창에서 수정하기보단 provide에서 변경할 수 있게
		// 메소드 까지 제공하자.
		const { message, updasteMessage } = inject('message');

		//message.value = message.value + '123'; // 직접수정금지
		updasteMessage('!');

		return { staticMessage, message, count };
	},
};
</script>

<style lang="scss" scoped></style>
