<script>
// options api 기반
export default {
  name: 'A02Bind',
  components: {},
  // View(template)에서 사용할 상태변수를 관리한다. 
  // 이 data 내부에 선언된 변수의 값이 변경되면 즉시 변경된 값 기반으로
  // 화면이 재 구성(리 렌더링)된다.
  data() {
    return {
      name: '놀부',
    }
  },
  // 계산된 속성
  computed: {},
  // data를 변경하는 이벤트 핸들러.
  // 어떠한 값을 반환하는 함수를 정의 => 상황에 따라 computed로 분리
  methods: {
    changeName() {
      // data, computed의 변수는 항상 this로 참조한다
      this.name = '방자';
    }
  }
};
</script>

<template>
  <h3>A02 Binding</h3>
  바인딩 식 내부에서는 식만 사용 가능<br />
  <br />

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: {{ name }}<br />
    함수의 리턴값: <br />
    함수의 리턴값: <br />
    배열: <br />
    객체: <br />
  </div>
  <br />

  <div>
    <h5>2. 바인딩 연산</h5>
    일반적 연산: <br />
    속성 참조: <br />
    속성 참조 연산: <br />
    비교 연산: <br />
    비교 연산: <br />
    삼항 연산: <br />
  </div>
  <br />

  <div>
    <h5>3. 바인딩 관련 지시자</h5>
    v-text: <span></span><br />
    v-html: <span></span><br />
    v-once: <span></span><br />
    v-pre: <span></span><br />
    <br />
    <button v-on:click="changeName()">Name</button>
    <button>Change</button>
    <br />
  </div>

  <div class="mb-5">
    Data에 존재하지 않는 변수: <br />
    Data에 존재하지 않는 객체: <br />
  </div>
</template>
