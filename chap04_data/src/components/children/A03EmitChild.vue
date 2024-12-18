<script>
export default {
  // custom event 설정
  emits: ['numEvent', 'objEvent'],
  data() {
    return {
      num: 10,
      name: 'NolBu',
      arr: [10, 20],
      user: { name: 'HungBu', age: 20 },
    };
  },
  methods: {
    changeName(x) {
      this.name = x;
    },
    sendNumber() {
      // $emit => Event.emitter
      // this.$emit('이벤트명', 전달할 값);
      this.$emit('numEvent', this.num);
    },
    sendObject() {
      // this.$emit('objEvent', this.num, this.name, ..);
      const data = {
        num: this.num,
        name: this.name,
        arr: this.arr,
        user: this.user,
        changeName: this.changeName,
      }
      this.$emit('objEvent', data);
    }
  }
};
</script>

<template>
  <h5>A03 Emits Child Component</h5>

  <div>
    Name: {{ name }}<br />
  </div>

  <div class="mb-5">
    <button @click="sendNumber">Num</button>
    <button @click="sendObject">Data</button>
  </div>
</template>

