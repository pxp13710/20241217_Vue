<script>
export default {
  // 읽기 전용 변수. this.변수명 형태로 참조
  props: {
    type: { type: String, required: true, default: 'time' },
  },
  data() {
    return {};
  },
  methods: {
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

  <div class="mb-5">Today: {{ getToday() }}<br /></div>
</template>
