<!-- eslint-disable no-unused-vars -->
<script>
// const baseURL = 'https://sample.bmaster.kro.kr/contacts_long/search/';
const baseURL = 'http://localhost:8000/contacts_long/search/';

export default {
  data() {
    return {
      x: 10,
      y: 20,
      total: 0,
      name: '',
      isLoading: false,
      contactList: [],
    };
  },
  methods: {
    getTotal(evt) {
      this.x = Number(evt.target.value); // v-model.number 이 여기까지는 해 준다
      this.total = this.x + this.y;
    },
    getSum(num) {
      this.total = Number(num) + Number(this.x);
    },
    getContactList(evt) {
      if (evt.target.value.trim().length >= 2) {
        console.log('ajax 요청');
      }
    },
    getNameValue(key) {
      this.isLoading = true;

      fetch(baseURL + key, { method: 'GET' })
        .then((resp) => {
          // console.log(resp);
          return resp.json(); // 다음 then이 받아 처리
        })
        .then((data) => {
          // console.log(data);
          this.contactList = data;
          // this.isLoading = false;
        })
        .catch((error) => {
          console.error(error);
          // this.isLoading = false;
        })
        .finally(() => {
          // 항상 실행된다
          this.isLoading = false;
        });
    },
  },
  // 변경된 값 기반으로 화면 갱신작업은 자동으로 진행된다.
  // 그 이외의 다른 처리가 필요한 경우 정의
  watch: {
    // 메서드명은 상태변수명과 동일해야 한다
    y(newVal, oldVal) {
      // console.log(newVal, oldVal);
      // this.total = Number(newVal) + Number(this.x);
      this.getSum(newVal);
    },
    name(newVal) {
      if (newVal.trim().length >= 2) this.getNameValue(newVal);
    },
  },
};
</script>

<template>
  <h3>A07 Watch</h3>

  <div class="mb-5">
    <input
      type="text"
      class="form-control"
      v-bind:value="x"
      @input="getTotal" /><br />
    <input
      type="text"
      class="form-control"
      v-model="y" /><br />
    Total: {{ total }}<br />
    <br />

    <!-- <input type="text" class="form-control" @input="getContactList" /><br /> -->
    <input
      type="text"
      class="form-control"
      v-model="name" /><br />
    <table class="table">
      <thead>
        <tr>
          <th>NO</th>
          <th>NAME</th>
          <th>TEL</th>
          <th>ADDRESS</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contact in contactList"
          :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>

    <div v-show="isLoading">Loading....</div>
  </div>
</template>
