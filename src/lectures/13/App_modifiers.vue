<template>
	<div>
		<div id="modifiers">
			<div @click="clickDiv">
				DIV 영역
				<p @click="clickP">
					P 영역
					<!-- .stop 으로 이벤트 전파를 막는다. -->
					<span @click.stop="clickSpan"> SPAN 영역 </span>

					<!-- 이벤트 전파와 이벤트 기본기능 막기  -->
					<a href="https://naver.com" @click.prevent.stop="clickA">a 영역</a>
				</p>
			</div>
		</div>
		<a href="https://naver.com" @click.prevent="clickA">a 영역</a>

		<!-- 이벤트의 전파는 캡처링으로 시작해서 버블링으로 마무리되는 플로우다 
         div태그를 먼저 실행하고 싶으면 capture modifier 를 이용해 캡처 모드로 선 실행 할 수 있다. 
         capture modifier 가 적용되면 stop 옵션이 있어도 선 실행 된다. 
        원래  : span -> p -> div , capture 적용 div -> p -> span 
        -->
		<br /><br /><br />
		<h1>capture</h1>
		<div id="modifiers">
			<div @click.capture="clickDiv2">
				DIV 영역
				<p @click="clickP2">
					P 영역
					<span @click="clickSpan2"> SPAN 영역 </span>
				</p>
			</div>
		</div>

		<!-- self 클릭한 요소가 나 자신일때 이벤트를 실행한다. 
          자식 엘리먼트에서는 처리되지 않는다
        -->
		<br /><br /><br />
		<h1>self</h1>
		<div id="modifiers">
			<div @click="clickDiv3">
				DIV 영역
				<p @click.self="clickP3">
					P 영역
					<span @click="clickSpan3"> SPAN 영역 </span>
				</p>
			</div>
		</div>

		<!-- once 수식어가 붙으면 한번만 실행된다. -->
		<br /><br /><br />
		<h1>once</h1>
		<button @click.once="clickDiv">한번만 클릭됨.</button>
	</div>
</template>

<script>
export default {
	setup() {
		const clickDiv = () => {
			console.log('clickDiv');
			//location.href = 'https://naver.com';
		};
		const clickP = () => {
			console.log('clickP');
		};
		const clickSpan = e => {
			// 이벤트 전파 기능 막는 옵션
			// @click.stop 와 같다.
			e.stopPropagation();
			console.log('clickSpan');
			alert('좋아요');
		};
		const clickA = e => {
			//경고창까지만 실행되고 event 객체의 href 이동기능은 작동 안되게 하는 옵션
			// @click.prevent 와 같다.
			e.preventDefault();
			alert('어떤기능~');
		};

		const clickDiv2 = () => {
			console.log('clickDiv2');
		};
		const clickP2 = () => {
			console.log('clickP2');
		};
		const clickSpan2 = () => {
			console.log('clickSpan2');
			alert('좋아요');
		};

		const clickDiv3 = () => {
			console.log('clickDiv3');
		};
		const clickP3 = () => {
			console.log('clickP3');
		};
		const clickSpan3 = () => {
			console.log('clickSpan3');
			alert('좋아요');
		};

		return {
			clickDiv,
			clickP,
			clickSpan,
			clickA,
			clickDiv2,
			clickP2,
			clickSpan2,
			clickDiv3,
			clickP3,
			clickSpan3,
		};
	},
};
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
	padding: 40px;
}
#modifiers div {
	background-color: #ccc;
}
#modifiers p {
	background-color: #999;
}
#modifiers span {
	background-color: #666;
	display: block;
}
</style>
