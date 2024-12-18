<script>
export default {
  data() {
    return {
      msg: 'Good Morning',
      isChecked: true,
      num: '',
      // 제어 가능
      yourStyle: {color: 'orange', fontSize: '20pt', fontWeight: 'bold'},
      yourCSS: 'one two three',
    };
  },
  computed: {
    // 수정 불가
    myStyle: () => ({color: 'orange', fontSize: '20pt', fontWeight: 'bold'}),
    myCSS: () => 'one two three',
    checkValue() {
      // this를 사용하는 경우 Arrow 함수로 변경 불가 => this 참조가 undefined가 된다
      return (this.num > 100 || this.num < 0) ? { warning: true } : { warning: false }
    }
  },
  methods: {
    enterEvent() {
      this.yourStyle.color = 'green';
    },
    leaveEvent() {
      this.yourStyle.color = 'orange';
    },
    enterCSSEvent() {
      this.yourCSS = 'two three';
    },
    leaveCSSEvent() {
      this.yourCSS = 'one two three';
    },
    
  }
};
</script>

<template>
  <div class="mb-3">
    <h3>A13 Style & Class</h3>

    <div style="color: orange; font-size: 20pt; font-weight: bold">{{ msg }}</div>
    <div :style="{color: 'orange', fontSize: '20pt', fontWeight: 'bold'}">{{ msg }}</div>
    <div :style="myStyle">{{ msg }}</div>
    <div :style="yourStyle" @mouseenter="enterEvent" @mouseleave="leaveEvent">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <h3>Class Binding</h3>

    <div class="one two three">{{ msg }}</div>
    <div class="one" v-bind:class="'two three'">{{ msg }}</div>
    <div :class="myCSS">{{ msg }}</div>
    <div :class="yourCSS" @mouseenter="enterCSSEvent" @mouseleave="leaveCSSEvent">{{ msg }}</div>
    <br />

    <!-- one, two, three는 변수명이 아닌 CSS의 클래스 이름이다 -->
    <div :class="{one: isChecked , two: true, three: true}">{{ msg }}</div>
    <!-- 객체의 key가 변수명인 경우는 []표기법을 사용해야 한다 -->
    <div :class="{ [myCSS]: isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5">
    <input type="number" class="form-control" v-model="num" :class="checkValue" />
  </div>
</template>

<!-- 
  scoped => 해당 컴포넌트의 요소에 중복되지 않는 [data-hash] 속성을 할당하고
    지정한 style도 one [data-hash] 형태로 지정한다 
  module => 내가 지정한 CSS 이름을 모두 hash를 추가한 변수명으로 변환    
    원본 이름은 this.$style이 관리
-->
<style scoped>
.one { color: orange; }
.two { font-size: 24pt; }
.three { font-weight: bold; }
.warning {
  background-color: orange;
  color: gray;
}
</style>
