<template>
	<main>
		<div class="container py-4">
			<MyButton @click="sayHello"></MyButton>
			<LabelInput label="이름" data-id="id입니다."></LabelInput>
			<hr />
			<!-- slot 처리 -->
			<FancyButton>Click !!<span style="color: red">@@@</span></FancyButton>

			<!-- slot 에 name 이 명시되지 않았을 때는 v-slot(#) 으로 받는다.-->
			<FancyButton v-slot="{ fancyMessage }">{{ fancyMessage }}</FancyButton>
			<FancyButton>
				<template #="{ fancyMessage }"> {{ fancyMessage }}.11</template>
			</FancyButton>
			<hr />
			<AppCard>
				<!-- v-slot(#) 이름으로 맵핑 
						 #[slotArgs] 변수로 동적 할당-->
				<template #[slotArgs]>제목입니다.</template>

				<!-- <template #default>내용입니다.</template> -->
				<!-- 암시적으로 Default 슬롯 입니다.! -->
				<!-- 하위 컨텐츠에서 부모 컨텐츠로 넘긴 데이터 받기 
						 객체로 출력
						<template #default="obj">{{ obj }}</template> -->
				<template #default="{ childMessage, helloMessage }">
					{{ childMessage }} {{ helloMessage }}
				</template>
				<template #footer>푸터입니다.</template>
			</AppCard>

			<hr />
			<AppCard> 암시적으로 Default 슬롯 입니다.! </AppCard>
		</div>
	</main>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import LabelInput from '@/components/LabelInput.vue';
import FancyButton from '@/components/FancyButton.vue';
import AppCard from '@/components/AppCard.vue';

import { ref } from 'vue';

export default {
	components: {
		MyButton,
		LabelInput,
		FancyButton,
		AppCard,
	},
	setup() {
		const sayHello = () => {
			alert('안녕하세요!');
		};
		const slotArgs = ref('header');
		return { sayHello, slotArgs };
	},
};
</script>

<style lang="scss" scoped></style>
