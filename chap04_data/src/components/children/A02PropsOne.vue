<!-- eslint-disable vue/no-mutating-props -->
<script>
export default {
  // 읽기 전용 변수. this.변수명 형태로 참조
  props: {
    type: { type: String, required: true, default: 'time' },
    age: { type: Number, default: 0 },
    add: { type: [Number, String] },
    arr: {
      type: Array,
      // 참조형의 default의 값은 함수의 반환값으로 정의
      default() {
        return [0, 0]; // validator check 대상이 된다
      },
      // value가 전달되는 값
      validator(value) {
        if (value.length >= 2) return true;
        else return false;
      },
    },
    user: {
      type: Object,
      // JavaScript에서 '', 0, NaN, undefined, null, false 값을 가진 변수는 모두 false 취급
      default: () => ({ name: 'Unknown', age: '0' }),
      validator: value => value.name && value.age,
    },
    onAdd: {
      type: Function,
      default() {
        return '함수가 전달되지 않았습니다';
      },
      validator: value => {
        if (typeof value(1, 2) === 'string') return true;
        else return false;
      },
    },
    changeAddress: {
      type: Function,
      default() {
        console.log('이 자체가 기본 함수로 동작한다');
      },
      // value가 전달되는 값
      validator: value => {
        return value() === undefined; // typeof value() === 'undefined' ? true : false;
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    changeAdd() {
      this.add = '변경 안됨'; // Error
    },
  },
  computed: {
    getToday() {
      const today = new Date();
      switch (this.type) {
        case 'date':
          return today.toLocaleDateString();
        case 'time':
          return today.toLocaleTimeString();
        default:
          return today.toLocaleString();
      }
    },
  },
};
</script>

<template>
  <h5>A02 Props Child ONE</h5>

  <div class="mb-2">
    Today: {{ getToday }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    onAdd: {{ onAdd(10, 20) }}<br />
  </div>

  <div class="mb-5">
    <button @click="changeAdd">ADD</button>
    <button @click="() => changeAddress('부산')">ADDRESS</button>
  </div>
</template>
