<script>
// template에서 사용할 변수, 함수, 이벤트 핸들러 등을 기술한다
// View Model이라 한다
export default {
  data() {
    return {
      title: 'Directive',
      name: '놀부',
      arr: [10],
    };
  },
};
</script>

<template>
  <!-- 내부적으로는 HTML과 동일하게 기술한다. Style과 더불어 View라 한다 -->
  <div class="m-3">
    <h1 class="orange">Chap03 {{ title }}</h1>

    <div>
      Name: {{ name }}<br />
      Array: {{ arr[0] }} / {{ arr[10] }} <br />
    </div>

    <div>
      <button v-on:click="name = '흥부'">Name</button>
    </div>
  </div>
</template>

<style scoped>
/* 기존 CSS 파일 정의 방식대로 정의한다 */
.orange {
  color: orange;
}
</style>
