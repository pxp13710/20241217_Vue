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
      num: 10,
      check: true,
      arr: [10, 11],
      user: {user: '방자', age: 20},
      greet: '<b>Good Morning</b>',
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
    },
    onAdd(x = 0, y = 0) {
      // console.log(this);               // 자신의 Component의 View Model
      return `${x} + ${y} = ${x + y}`;
    },
    // Arrow 함수 사용 자체는 가능. 다만 this 참조(자신의 데이터)가 되지 않는다
    onMin: (x = 0, y = 0) => {
      // console.log(this);               // static 모드에서 window 참조는 undefined
      return `${x} - ${y} = ${x - y}`;
    },
    
  }
};
</script>

<template>
  <h3>A02 Binding</h3>
  바인딩 식 내부에서는 식만 사용 가능
  View Model에 존재하는 값은 this 없이 변수명, 함수명으로 참조한다
  <br />
  <br />

  <div>
    <h5>1. 일반적 바인딩</h5>
    일반적인 단방향 바인딩: {{ name }} / {{ num }}<br />
    Boolean: {{ check ? '동의' : '동의 안함' }}<br>
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br>
    Object: {{ user.name }} / {{ user.age }} / {{ user.address }}<br>

    함수의 리턴값: {{ onAdd(10, 20) }}<br />
    함수의 리턴값: {{ onMin(10, 20) }} <br />
  </div>
  <br />

  <div>
    <h5>2. 바인딩 연산 - <span v-pre>{{ => 자바스크립트의 시작, }} => 자바스크립트 종료</span></h5>
    <!-- 바인딩 내부에서는 식 사용은 가능하다 -->
    일반적 연산: {{ 10 + 20 }}<br />
    속성 참조: {{ arr.length }}<br />
    속성 참조 연산: {{ arr.length * 100 }} <br />
    비교 연산: {{ arr[0] > 0 }} <br />
    비교 연산: {{ arr[0] > 0 && arr[1] > 0 }}<br />
    삼항 연산: {{ name === '놀부' ? '관리자' : '일반 유저' }}<br />
  </div>
  <br />

  <div>
    <!-- 
      vue가 제공해주는 지시자(Directive)는 "v-"로 시작한다
      지시자의 값은 항상 변수명 또는 실질적인 값을 지정해야 한다(문자열이 아님) 
    -->
    <h5>3. 바인딩 관련 지시자</h5>
    바인딩: {{ greet }}<br>
    v-text: <span v-text="'Hello World'"></span><br />
    v-text: <span v-text="20"></span><br /> <!-- 숫자값 -->
    v-text: <span v-text="'20'"></span><br /> <!-- 문자값 -->
    v-text: <span v-text="greet"></span><br />
    v-html: <span v-html="greet"></span><br />

    <!-- computed로 구현할 수 있음 -->
    <!-- v-once: <span v-once>{{ greet }}</span><br /> -->

    <!-- {{  }}를 문자로 취급 -->
    v-pre: <span v-pre> {{ 가 바인딩으로 사용되므로 문자로 표현할 경우</span><br />
    <br />

    <button v-on:click="changeName()">Name</button>
    <button @click="num = num + 1">Change</button>
    <br />
  </div>

  <div class="mb-5">
    <!-- 
      Data에 존재하지 않는 변수(경고): {{ x || 0}}<br />
      Data에 존재하지 않는 객체(에러): {{ y && y.name }}<br />
      Data에 존재하지 않는 객체(에러): {{ y?.name }}<br /> 
    -->
  </div>
</template>
