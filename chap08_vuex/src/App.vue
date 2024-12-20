<script>
import Counter from './components/Counter.vue';
import TodoTemplate from './components/TodoTemplate.vue';

export default {
  components: { Counter, TodoTemplate }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap07 Vuex TodoList / {{ $store.state.countStore.count }}</h1>

    <TodoTemplate></TodoTemplate>
    <Counter></Counter>
  </div>
</template>