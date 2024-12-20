<script>
import Counter from './components/Counter.vue';

export default {
  components: { Counter }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap07 Vuex TodoList / {{ $store.state.count }}</h1>

    <Counter></Counter>
  </div>
</template>