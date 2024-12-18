<script>
import A05TodoItem from './A05TodoItem.vue';

export default {
  props: ['todoList', 'updateTodo', 'deleteTodo'],
  components: { A05TodoItem }
};
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th style="width: 10%">ID</th>
        <th>Todo</th>
        <th style="width: 10%">Complete</th>
        <th style="width: 10%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="todo in todoList" :key="todo.id">
        <!-- 각 줄에 대한 정보를 다시 자식 컴포넌트에 전달 -->
        <A05TodoItem :todo="todo" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoItem>
      </template>
    </tbody>
  </table>
</template>
