<template>
  <div>
    
    <p>author: {{ title}}</p>
    
  </div>
</template>

<script>
  import { reactive, toRef, toRefs } from 'vue'

  export default {
    setup () {
      const book = reactive({
        author: 'Vue Team',
        year: '2020',
        title: 'Vue 3 Guide',
        description: '당신은 이 책을 지금 바로 읽습니다 ;)',
        price: '무료'
      })
      // 일반적으로 reactive 객체에서 구조분해 할당을 하게 되면 
      // 속성안에 값만 변수에 담기고 반응성은 잃게 된다.
      let { author, title } = book;
      console.log(typeof author);

      // 반응형을 유지하면서 구조분해 할당 방법 
      // toRef, toRefs 사용해서 구조분해 하면 Ref 객체? 로 생성되며 
      // 반응형 상태가 서로 동기화 된다.
      // 한쪽이 바뀌면 다른 한쪽도 같이 변경된다. 

      // toRef를 사용해서 하나씩 
      let year = toRef(book, 'year');    

      // toRefs 를 사용해서 여러개 동시에.
      let { price, description } = toRefs(book);

      //return {author, title, book, title_s, author_m,title_m}
      return {author, title, year, price, description}
    }
  }
</script>

<style lang="scss" scoped>

</style>