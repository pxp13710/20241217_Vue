<script>
import A05TodoForm from './children/A05TodoForm.vue';
import A05TodoTable from './children/A05TodoTable.vue';

const todoList = [
  { id: 1, text: '첫 번째 할 일', done: true },
  { id: 2, text: '두 번째 할 일', done: false },
  { id: 3, text: '세 번째 할 일', done: false },
];
// let cnt = 4;

export default {
  components: { A05TodoForm, A05TodoTable },
  data() {
    return {
      todoList,
      text: '',
    };
  },
  methods: {
    // 하위 컴포넌트가 todoList를 제거하기 위한 권한(메서드)를 작성해서 속성으로 전달
    // 메서드를 실행할때 호출하는 하위컴포넌트에서 전달되야 할 값은 모두 매개변수로
    updateTodo(id) {
      const idx = this.todoList.findIndex((item) => {
        // console.log(this);
        return (item.id === id) ? true : false;
      })
      // console.log(idx);
      this.todoList[idx].done = !this.todoList[idx].done;
    },
    deleteTodo(id) {
      const idx = this.todoList.findIndex((item) => (item.id === id) )
      this.todoList.splice(idx, 1);
    },
    addTodo(text) {
      let cnt = this.todoList.at(-1) ? this.todoList.at(-1).id + 1 : 1;
      const todo = { id: cnt++, text, done: false };
      this.todoList.push(todo);
    },
    changeText(text) {
      this.text = text;
    }
  }
};
</script>

<template>
  <h3>A05 TodoList</h3>

  <div class="mb-5">
    <A05TodoForm :addTodo="addTodo" :text="text" :changeText="changeText"></A05TodoForm>
    <A05TodoTable :todoList="todoList" :updateTodo="updateTodo" :deleteTodo="deleteTodo"></A05TodoTable>
  </div>
</template>
