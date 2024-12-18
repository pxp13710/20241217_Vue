<script>
// const sum = 10;
// const x = 10;

export default {
  data() {
    return {
      name: 'NolBu',
      address: '',
      num: 10,
      count: 0,
      // sum: 10
    };
  },
  // 뷰에서 표시할 반환 값을 갖는 함수 -> computed로 변경할 수 있는지 체크
  // 이벤트 핸들러 등이 기술된다.
  methods: {
    onAdd(x = 0, y = 0) {
      console.log('onAdd...');
      return `${x} + ${y} = ${x + y}`;
    },
    getMethod() {
      console.log('getMethod...');
      let total = 0;
      for (let i = 1; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
    changeString(evt) {
      // console.log(evt.target.name, evt.target.value);
      this[evt.target.name] = evt.target.value.trim();
    },
    changeNumber(evt) {
      // console.log(evt.target.name, evt.target.value);
      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = '';
      this[evt.target.name] = value;
    },
  },
  // 계산된 속성이라한다. 읽기 전용 변수다.
  // 기존의 data에 변수를 이용해서 새로운 값을 산출하는 경우 사용

  // 작성은 메서드 방식. 사용은 getter (속성) 방식으로 이용
  // 함수 내부에서 사용된 this 변수, 메서드가 변경된 경우만 새롭게 호출된다

  // 함수가 View에서 사용되는 경우. 매개변수가 없고 리턴값이 있는 경우
  computed: {
    getComputed() {
      console.log('getComputed...');
      let total = 0;
      for (let i = 1; i <= this.num; i++) {
        total += i;
      }
      return total;
    },
    // 변경되지 않을 고정값을 사용할 목적으로 정의. v-once를 사용하지 않아도 되는 이유
    sum: () => 10,
  },
};
</script>

<template>
  <h3>A05 Method / {{ sum }}</h3>

  <div>
    <h5>1. Method</h5>

    onAdd: {{ onAdd(10, 20) }} <br />
    <br />

    <!-- form 요소의 name 속성을 할당하고 이 name의 값이 data의 변수명과 동일한 이름으로 정의 -->
    Name: {{ name }}
    <input
      type="text"
      name="name"
      class="form-control"
      :value="name"
      @input="changeString" />
    Address: {{ address }}
    <input
      type="text"
      name="address"
      class="form-control"
      :value="address"
      @input="changeString" />

    Num: {{ num }}
    <input
      type="number"
      name="num"
      class="form-control"
      :value="num"
      @input="changeNumber" />
    Count: {{ count }}
    <input
      type="number"
      name="count"
      class="form-control"
      :value="count"
      @input="changeNumber" />
  </div>
  <br />

  <div class="mb-5">
    <h5>2. Computed</h5>
    Methods: {{ getMethod() }}<br />
    Computed: {{ getComputed }}<br />
    <!-- () 없이 변수처럼 호출한다 -->
  </div>
</template>
