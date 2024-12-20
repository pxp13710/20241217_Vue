<script>
export default {
  methods: {
    decrease() {
      this.$store.commit('countStore/decrease');
    }
  },
  computed: {
    count() {
      return this.$store.state.countStore.count;
    },
    first() {
      return this.$store.getters['countStore/firstItem']
    },
    second() {
      return this.$store.getters['countStore/getItem'](1002)
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<template>
  <div>
    <h3>{{ $store.state.countStore.storeName }}</h3>

    <p>
      Length: {{ $store.getters['countStore/contactSize'] }} <br />
      First: {{ $store.getters['countStore/firstItem'].no }} / {{ $store.getters['countStore/firstItem'].name }}<br />
      First: {{ first.no }} / {{ first.name }}<br />
      GET: {{ $store.getters['countStore/getItem'](1002).no }} / {{ $store.getters['countStore/getItem'](1002).name }}<br>
      GET: {{ second.no }} / {{ second.name }}
    </p>

    <div>
      Num: {{ $store.state.countStore.count }} / {{ count }}<br>
      <button @click="() => $store.commit('countStore/increase', 2)">+</button>
      <button @click="decrease">-</button>

      <button @click="() => $store.dispatch('countStore/decreaseAction', 3)">-</button>
    </div>
</div>
</template>

<!--
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

    <p>
      Length: {{ $store.getters.contactSize }}<br />
      First: {{ $store.getters.firstItem.no }} / {{ $store.getters.firstItem.name }}<br />
      GET: {{ $store.getters.getItem(1002).no }} / {{ $store.getters.getItem(1002).name }}
    </p>

    <div>
      Num: {{ $store.state.count }}<br>
      <button @click="() => $store.commit('increase', 2)">+</button>
      <button @click="decrease">-</button>

      <button @click="() => $store.dispatch('decreaseAction', 3)">-</button>
    </div>
</div>
</template>
-->