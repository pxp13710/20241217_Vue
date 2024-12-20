const todoStore = {
  namespaced: true,
  state: {
    todoList: [
      { id: 1, text: '첫 번째 할 일', done: true },
      { id: 2, text: '두 번째 할 일', done: false },
      { id: 3, text: '세 번째 할 일', done: false },
    ],
    text: '',
  },
  mutations: {
    // payload => no
    updateTodo: (state, payload) => {
      const idx = state.todoList.findIndex(item => item.id === payload);
      state.todoList[idx].done = !state.todoList[idx].done;
    },
    // payload => no
    deleteTodo: (state, payload) => {
      const idx = state.todoList.findIndex(item => item.id === payload);
      state.todoList.splice(idx, 1);
    },
    // payload => 할일 텍스트
    addTodo: (state, payload) => {
      const cnt = state.todoList.at(-1) ? state.todoList.at(-1).id + 1 : 1;
      state.todoList.push({ id: cnt, text: payload, done: false });
    },
    // payload => 할일 텍스트
    changeText: (state, payload) => {
      state.text = payload;
    }
  }
}
export default todoStore;
