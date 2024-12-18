<script>
export default {
  data() {
    return {
      num: 0,
      contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
    };
  },
  methods: {
    increase() {
      this.num += 1;
    },
    decrease() {
      this.num -= 1;
    },
    getNameValue() {
      fetch('http://localhost:8000/contacts_long?pageno=1&pagesize=5', { method: 'GET' })
        .then((resp) => {
          // console.log(resp);
          return resp.json(); // 다음 then이 받아 처리
        })
        .then((data) => {
          // console.log(data);
          this.contactList = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  // 일정한 시점마다 Vue가 자동으로 발생시키는 이벤트에 따라 실행될 메서드
  // LifeCycle method라 한다

  // data, event 초기화 전
  beforeCreate() {
    console.log('beforeCreate');
  },
  // data, event 초기화 완료
  created() {
    console.log('created');
    this.getNameValue();
  },
  // DOM 생성 전
  beforeMount() {
    console.log('beforeMount');
  },
  // DOM 생성 완료 후 mount
  mounted() {
    console.log('mounted');
    // this.getNameValue();
  },
  // state 변경 전
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  // state 변경 후
  updated() {
    console.log('updated');
  },
  beforeUnmount() {
    // beforeDestory
    console.log('beforeUnmount');
  },
  unmounted() {
    // 메모리에 있는 interval 변수 등의 처리 작업..
    console.log('unmounted'); // destoryed
  },
};
</script>

<template>
  <h3>A08 LifeCycle</h3>

  <div>
    <div>Total: {{ contactList.totalcount }}, page: {{ contactList.pageno }}</div>
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
          v-for="contact in contactList.contacts"
          :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="mb-3">Num: {{ num }}</div>

  <div class="mb-5">
    <button v-on:click="increase()">+1</button>
    <button v-on:click="decrease()">-1</button>
  </div>
</template>
