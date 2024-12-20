<!-- eslint-disable no-unused-vars -->
<script>
export default {
  methods: {
    back: function () {
      // this.$router.back();
      this.$router.go(-1);
    },
    forward: function () {
      // this.$router.forward();
      this.$router.go(1);
    },
    goHome: function () {
      // this.$router.push('/');
      this.$router.replace('/');      // history에 남기지 않고 이동
    },
    goURL: function (path) {
      this.$router.push(path);
    },
  },
  // composition API 기반에서는 없음
  beforeRouteEnter(to, from) {
    console.log('------- beforeRouteEnter -------');
    // console.log(from);
    const session = globalThis.sessionStorage;

    if (session.getItem('address')) return true;
    else return false;
  },
  beforeRouteLeave(to, from) {
    console.log('------- beforeRouteLeave -------');
    
    
    const session = globalThis.sessionStorage;

    if (session.getItem('tel')) return true;
    else return false;
  },
  beforeRouteUpdate(to, from) {
    console.log('------- beforeRouteUpdate -------');
    const session = globalThis.sessionStorage;
    if (session.getItem('tel')) return true;
    else return false;
  },
  mounted() {
    // console.log(this.$router);
  }
}
</script>

<template>
  <div>
    <h3>A07 Push</h3>

    <div>
      <button @click="back">BACK</button>
      <button @click="forward">FORWARD</button>
      <button @click="goHome">HOME</button>
      <button @click="goURL('/A02')">A02Attr</button>

      <!-- 객체 형태의 데이터 전달은 name 사용 -->
      <button @click="goURL({name: 'attrs'})">A02Attr</button>
      <button @click="goURL({name: 'params', params: {no: 1001, name: 'ABC', cno: 1}})">Params</button>
      <button @click="goURL({name: 'query', query: {no: 1001, name: 'ABC', address: '서울'}, hash: '#BTM'})">Query</button>
    </div>
  </div>
</template>
