<script>
export default {
  data() {
    return {
      name: '놀부',
      num: 10,
      imgAttrs: { direction: 'width', size: 300 },
      formCtrl: 'form-control',
      attrs: { type: 'text', class: 'form-control', value: '흥부' },
      myStyle: {
        backgroundColor: 'lightgray',
        fontWeight: 'bold',
        margin: '10px',
        padding: '10px',
        color: 'orange',
      },
    };
  },
  methods: {
    enterEvent() {
      this.myStyle.backgroundColor = 'orange';
      this.myStyle.color = 'lightgray';
    },
    leaveEvent() {
      this.myStyle.backgroundColor = 'lightgray';
      this.myStyle.color = 'white';
    },
    changeNumber(evt) {
      let value = Number(evt.target.value);
      if (Number.isNaN(value)) value = 0;
      this.num = value;
    },
  },
};
</script>

<template>
  <h3>A03 Attribute Directive</h3>

  <div>
    <h5>1. 속성 바인딩</h5>
    <!-- 속성은 반드시 v-bind:속성명="변수명 or 값" 형태로 참조. v-bind는 생략 가능 -->
    <!-- <input type="text" class="form-control" value={{ name }} /> -->
    <input
      type="text"
      class="form-control"
      v-bind:value="name" />

    <!-- v-bind는 생략 가능 -->
    <input
      type="text"
      class="form-control"
      :value="name" />

    <!-- 여러 속성을 v-bind로 이용 가능 -->
    <input
      type="text"
      :class="'form-control'"
      :value="name" />
    <input
      type="text"
      :class="formCtrl"
      :value="name" />

    <!-- 속성을 묶어서 할당 가능 => 객체로 정의한다 -->
    <input v-bind="attrs" />

    <div style="background-color: lightgray; margin: 10px; padding: 10px; color: white">
      Hello World
    </div>
    <div
      :style="{ backgroundColor: 'lightgray', margin: '10px', padding: '10px', color: 'orange' }">
      Hello World
    </div>

    <div
      :style="myStyle"
      v-on:mouseenter="enterEvent"
      @mouseleave="leaveEvent">
      Hello World
    </div>
  </div>
  <br />

  <div>
    <h5>2. 양방향 바인딩: {{ num + 1 }} / {{ typeof num }}</h5>
    <input
      type="text"
      class="form-control"
      v-model.trim="name" />
    <input
      type="text"
      class="form-control"
      v-model="name" />
    <input
      type="number"
      class="form-control"
      v-model.number="num" />

    <!-- 리엑트는 이 방식만 지원한다 -->
    <input
      type="text"
      class="form-control"
      v-bind:value="num"
      @input="changeNumber" />
  </div>
  <br />

  <div class="row">
    <div class="col-6">
      <select
        class="form-control"
        v-model="imgAttrs.direction">
        <option value="width">Width</option>
        <option value="height">Height</option>
      </select>
    </div>
    <div class="col-6">
      <input
        type="number"
        class="form-control"
        v-model.number="imgAttrs.size" />
    </div>
  </div>
  <br />

  <div class="mb-5">
    <img
      src="/images/tree.jpg"
      alt="Tree"
      :[imgAttrs.direction]="imgAttrs.size" />
  </div>
</template>
