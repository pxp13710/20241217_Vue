<script>
const data = {
  countryname: '',
  countries: [
    { no: 1, name: '미국', capital: '워싱턴DC', region: 'america' },
    { no: 2, name: '프랑스', capital: '파리', region: 'europe' },
    { no: 3, name: '영국', capital: '런던', region: 'europe' },
    { no: 4, name: '중국', capital: '베이징', region: 'asia' },
    { no: 5, name: '태국', capital: '방콕', region: 'asia' },
    { no: 6, name: '모로코', capital: '라바트', region: 'africa' },
    { no: 7, name: '라오스', capital: '비엔티안', region: 'asia' },
    { no: 8, name: '베트남', capital: '하노이', region: 'asia' },
    { no: 9, name: '피지', capital: '수바', region: 'oceania' },
    { no: 10, name: '솔로몬 제도', capital: '호니아라', region: 'oceania' },
    { no: 11, name: '자메이카', capital: '킹스턴', region: 'america' },
    { no: 12, name: '나미비아', capital: '빈트후크', region: 'africa' },
    { no: 13, name: '동티모르', capital: '딜리', region: 'asia' },
    { no: 14, name: '멕시코', capital: '멕시코시티', region: 'america' },
    { no: 15, name: '베네수엘라', capital: '카라카스', region: 'america' },
    { no: 16, name: '서사모아', capital: '아피아', region: 'oceania' },
  ],
};
export default {
  data() {
    return {
      countries: data.countries,
      countryname: data.countryname,
    }
  },
  computed: {
    searchData() {
      const data = this.countries.filter(item => {
        if(item.name.includes(this.countryname)) return true; // item이 반환
        else return false;                                    // item이 반환되지 않음
      });
      return data;
    },
  },
  methods: {
    searchEvent(){
      // A11Ref 예제를 미리...
      // 참조하고자 하는 DOM 요소에 ref="참조이름을 할당"
      // VM에서는 this.$refs.참조이름 형태로 접근 
      // console.log(this.$refs);

      //  document.getElementById('search') => this.$refs.searchRef
      this.$refs.searchRef.style.backgroundColor = 'orange';
      this.countryname = this.$refs.searchRef.value;

      this.$refs.btnRef.style.color = 'orange';

      // document.getElementById('search').style.backgroundColor = 'orange';
      // this.countryname = document.getElementById('search').value;
    }
  }
};
</script>

<template>
  <h3>A06 Computed</h3>

  <div class="input-group">
    <input type="text" name="search" id="search" class="form-control" ref="searchRef" />
    <div class="input-group-append">
      <button class="btn btn-primary" @click="searchEvent"  ref="btnRef">SEARCH</button>
    </div>
  </div>
  <br />

  <table class="table mb-5">
    <thead>
      <tr>
        <th>번호</th>
        <th>국가명</th>
        <th>수도</th>
        <th>지역</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in searchData" :key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.capital }}</td>
        <td>{{ item.region }}</td>
      </tr>
    </tbody>
  </table>
</template>
