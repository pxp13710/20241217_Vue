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
      evt.target.style.backgroundColor = 'lightgreen';
      this.num = this.num - 2;
    },
    decThree(x) {
      this.num = this.num - x;
    },
    decFour(x, evt, color){
      this.num = this.num - x;
      evt.target.style.backgroundColor = color;
    },

    outer(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    one(evt) {
      console.log(evt.target, evt.currentTarget);
    },
    two(evt) {
      console.log(evt.target, evt.currentTarget);
    },

    daum(evt) {
      console.log('daum');
    },
    naver() {
      console.log('naver');
    },

    keyEventOne(evt) {

    },
    keyEventTwo(evt) {

    },
    escEvent() {

    },
    enterEvent(){

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
    <!-- <button @click="decTwo()">(-2)</button> -->    <!-- Error => decTwo($event) -->
    <button @click="decTwo">-2</button>
    <button @click="decThree(3)">(-3)</button>        <!-- inline 방식 -->
    <button @click="(evt) => decThree(3)">-3</button> <!-- addEventListener 방식 -->
    <button @click="decFour(4, $event, 'red')">(-4)</button>      <!-- inline 방식 -->
    <button @click="(evt) => decFour(4, evt, 'red')">-4</button>  <!-- addEventListener 방식 -->

    <button @click="decOne">once</button>
    <button @click="decOne">Key</button>
  </div>

  <div id="container" class="mb-3" @click="outer">
    <div id="inner" @click="one">ONE</div>
    <div id="inner" @click="two">TWO</div>
  </div>

  <div class="mb-3">
    <a href="http://www.daum.net" @click="daum">DAUM</a><br />
    <a href="http://www.naver.com" @click="naver">NAVER</a>
  </div>

  <div class="mb-5">
    JS: <input type="text" class="form-control" @keyup="keyEventOne" /><br />
    Vue: <input type="text" class="form-control" @keyup="keyEventTwo" /><br />
    esc: <input type="text" class="form-control" v-model="name" @keydown="escEvent" /><br />
    Enter: <input type="text" class="form-control" v-model="msg" @keydown="enterEvent" /><br />
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
