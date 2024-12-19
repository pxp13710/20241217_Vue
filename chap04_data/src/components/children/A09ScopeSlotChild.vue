<script>
export default {
  data() {
    return {
      kor: 90,
      eng: 70,
      user: { name: 'HungBu', age: 20, address: 'Busan' },
    };
  },
  methods: {
    changeKor(kor) {
      this.kor = kor;
    },
  },
};
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div>자식 컴퍼넌트의 데이터를 부모 컴퍼넌트에서 조작.</div>

  <div>
    <input type="text" class="form-control" v-model.number="kor" />
    <input type="text" class="form-control" v-model.number="eng" />
  </div>

  <div class="mb-5">
    <!-- slot props라 한다. name 속성은 값 전달 이름으로 사용 불가
      name은 slot의 이름으로 사용 v-slot:jumsu 형태로 사용 
    -->
    <slot nickname="놀부" :user="user" :kor="kor" :eng="eng" :changeKor="changeKor"></slot>
    <slot name="jumsu"  nickname="흥부" :user="user" :kor="kor" :eng="eng" :changeKor="changeKor"></slot>
  </div>
</template>

