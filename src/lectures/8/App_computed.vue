<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <p>{{ teacher.lectures.length > 0 ? '있음' : '없음' }}</p>
    <br>
    <h2>computed 사용</h2>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <br>
    <h2>method 사용</h2>
    <p>{{ existLecture() }}</p>    
    <p>{{ existLecture() }}</p>    
    <p>{{ existLecture() }}</p>            

    <br>
    <button v-on:click="counter++">Counter: {{ counter }}</button>
    <br>
    <h2>이름</h2>
    <p>{{ fullName }}</p>
    <br>
    <h2>get()/set() 이름</h2>
    <p>{{ fullName2 }}</p>
    
  </div>
</template>

<script>

import { computed, reactive, ref } from 'vue';

export default {
  setup () {
    const teacher = reactive({
      name: '짐코딩',
      lectures: ['HTML/CSS', 'JavaScript', 'Vue3'],
    });

    // computed 사용
    // 계산된 값이 캐쉬 되기 때문에 성능면에서 더 좋다.
    // 반응형 데이터 즉 teacher.lectures 가 변경되기 전까지는 호출 안됨.
    const hasLecture = computed(()=> {
      console.log("computd");
      return teacher.lectures.length > 0 ? '있음' : '없음'
    });

    // 메서드로 정의
    // 실행될때마다 호출됨.    
    const existLecture = ()=> {
      console.log("method");      
      return teacher.lectures.length > 0 ? '있음' : '없음'
    };    

    const counter    = ref(0);
    const firstName  = ref('홍');
    const lastName   = ref('길동');
    const firstName2 = ref('홍');
    const lastName2  = ref('길동');    

    // 읽기전용 속성으로 사용할 수 있다.
    const fullName = computed(() => 
      firstName.value + ' ' + lastName.value
    );

    //computed 함수에 get() / set() 적용 되면 동적으로 할당 가능하다.
    const fullName2 = computed({
      get(){
        return firstName2.value + ' ' + lastName2.value;
      },
      set(value) {
        console.log('computed set 함수 내부 파라메터 값: ',value);
        [firstName2.value, lastName2.value] = value.split(' ');
      },
    });

    //computed set() 이 구현되어 있으면 호출된다.
    fullName2.value = '짐 코딩'

    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName,
      fullName2,
    }
  },
};
</script>

<style lang="scss" scoped>

</style>