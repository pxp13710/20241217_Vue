<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    increase () {
      this.num += 1;
    },
    decrease () {
      this.num -= 1;
    },
  },

  // 일정한 시점마다 Vue가 자동으로 발생시키는 이벤트에 따라 실행될 메서드
  // LifeCycle method라 한다
  
  // data, event 초기화 전
  beforeCreate () {
    console.log('beforeCreate');
  },
  // data, event 초기화 완료
  created () {
    console.log('created');
  },
  // DOM 생성 전
  beforeMount () {
    console.log('beforeMount');
  },
  // DOM 생성 완료 후 mount
  mounted () {
    console.log('mounted');
  },
  // state 변경 전
  beforeUpdate () {
    console.log('beforeUpdate');
  },
  // state 변경 후
  updated () {
    console.log('updated');
  },
  beforeUnmount () {
    // beforeDestory
    console.log('beforeUnmount');
  },
  unmounted () {
    console.log('unmounted'); // destoryed
  },
};
</script>

<template>
  <h3>A08 LifeCycle</h3>

  <div class="mb-3">
    Num: {{ num }}
  </div>

  <div class="mb-5">
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>
</template>
