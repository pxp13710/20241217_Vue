<script>
export default {
  methods: {
    decrease() {
      this.$store.commit('decrease');
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<template>
  <div>
    <h3>{{ $store.state.storeName }}</h3>

    <div>
      Num: {{ $store.state.count }}<br>
      <button @click="() => $store.commit('increase', 2)">+</button>
      <button @click="decrease">-</button>

      <button @click="() => $store.dispatch('decreaseAction', 3)">-</button>
    </div>
</div>
</template>
