<script>
export default {
  data() {
    return {
      num: 0,
      name: 'Guest',
      msg: '',
    };
  },
  methods: {
    incTwo() {
      this.num = this.num + 2;
    },
    incThree(evt) {
      evt.target.style.backgroundColor = 'orange';
    },
    incFour(x, color, evt) {
      evt.target.style.backgroundColor = color;
      this.num = this.num + x;
    },

    decOne() {
      this.num = this.num - 1;
    },
    decTwo(evt) {
      console.log(evt);
      evt.target.style.backgroundColor = 'lightgreen';
      this.num = this.num - 2;
    },
    decThree(x) {
      this.num = this.num - x;
    },
    decFour(x, evt, color) {
      this.num = this.num - x;
      evt.target.style.backgroundColor = color;
    },

    outer(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    one(evt) {
      console.log(evt.target, evt.currentTarget);
      evt.stopPropagation(); // bubbling 단계의 이벤트 실행을 취소
    },
    two(evt) {
      console.log(evt.target, evt.currentTarget);
    },

    daum(evt) {
      // DOM이 빌드될때 추가되는 기본 JavaScript을 실행하지 않도록 지시
      evt.preventDefault();
      const result = confirm('이동하시겠습니까');
      if (result) location.assign('http://daum.net');
      console.log('daum');
    },
    naver() {
      console.log('naver');
    },

    keyEventOne(evt) {
      const code = evt.code;
      const key = evt.key;
      const keyCode = evt.keyCode;
      console.log(`Code: ${code}, Key: ${key}, keyCode: ${keyCode}`);
      console.log(
        `Shift: ${evt.shiftKey}, Alt: ${evt.altKey}, Ctrl: ${evt.ctrlKey}, Meta: ${evt.metaKey}`
      );

      if (evt.keyCode === 65 && evt.shiftKey) {
        location.assign('http://google.com');
      }
      if (evt.keyCode === 13) {
        alert(evt.target.value);
      }
      if (evt.keyCode === 27) {
        evt.target.value = '';
      }
    },
    keyEventTwo() {
      location.assign('http://google.com');
    },
    escEvent() {
      this.name = '';
    },
    enterEvent() {
      alert(this.msg);
    },
  },
};
</script>

<template>
  <h3>A09 Event</h3>

  <div class="mb-3">
    Num: {{ num }}<br />

    <!-- inline Event 방식으로 구현 -->
    <button v-on:click="num = num + 1">+1</button>
    <button v-on:click="incTwo()">+2</button>
    <!-- $event는 자바스크립트의 event의 wrapper  -->
    <button v-on:click="incThree($event)">+3</button>
    <button v-on:click="incFour(4, 'green', $event)">+4</button>

    <!-- addEventListener 방식으로 구현 -->
    <button @click="decOne">-1</button>
    <!-- <button @click="decTwo()">(-2)</button> -->
    <!-- Error => decTwo($event) -->
    <button @click="decTwo">-2</button>
    <button @click="decThree(3)">(-3)</button>
    <!-- inline 방식 -->
    <button @click="(evt) => decThree(3)">-3</button>
    <!-- addEventListener 방식 -->
    <button @click="decFour(4, $event, 'red')">(-4)</button>
    <!-- inline 방식 -->
    <button @click="(evt) => decFour(4, evt, 'red')">-4</button>
    <!-- addEventListener 방식 -->

    <!-- 이벤트의 속성을 @이벤트명.속성 형태로 지정 가능 -->

    <!-- 최초 1번만 이벤트 적용 -->
    <button @click.once="decTwo">once</button>

    <!-- shift 키를 누르고 클릭해야 이벤트 핸들러가 실행 
      shift, alt, ctrl, meta, left, middle, right 
    -->
    <button @click.shift="decTwo">Key</button>
  </div>

  <div
    id="container"
    class="mb-3"
    @click="outer">
    <div
      id="inner"
      @click="one">
      ONE
    </div>

    <!-- stopPropagation => 상위 이벤트 실행 안함 -->
    <div
      id="inner"
      @click.stop="two">
      TWO
    </div>
  </div>

  <div class="mb-3">
    <a
      href="http://www.daum.net"
      @click="daum"
      >DAUM</a
    ><br />
    <!-- @click.prevent => preventDefault -->
    <a
      href="http://www.naver.com"
      @click.prevent="naver"
      >NAVER</a
    >
  </div>

  <div class="mb-5">
    <!-- keyup, keydown, keypress -->
    JS:
    <input
      type="text"
      class="form-control"
      @keyup="keyEventOne" /><br />
    Vue:
    <input
      type="text"
      class="form-control"
      @keyup.a.shift="keyEventTwo" /><br />
    esc: {{ name }}<br />
    <input
      type="text"
      class="form-control"
      v-model="name"
      @keydown.esc="escEvent" /><br />
    Enter: {{ msg }}<br />
    <input
      type="text"
      class="form-control"
      v-model="msg"
      @keydown.enter="enterEvent" /><br />
  </div>
</template>

<style scoped>
#container {
  width: 300px;
  height: 150px;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
}
#inner {
  width: 100px;
  height: 100px;
  background: orange;
  padding: 10px;
  margin: 10px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
