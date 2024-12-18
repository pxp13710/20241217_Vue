<script>
export default {
  data() {
    return {
      names: ['NolBu', 'HungBu'],
      user: { name: 'NolBu', age: 20 },
    };
  },
  methods: {
    addArray() {
      const random = Math.ceil(Math.random() * 100);
      this.names.push(random);
    },
    updateArray(idx, value) {
      this.names[idx] = value;
    },
    deleteArray(idx) {
      this.names.splice(idx, 1);
    },

    addObject(key, value) {
      /* // 2.X
      const newUser = { ...this.user };
      newUser[key] = value;
      this.user = newUser;
      */

      // 객체는 지정된 키 값이 없으면 추가, 존재하면 변경
      this.user[key] = value;
    },
    updateObject(key, value) {
      // 객체는 지정된 키 값이 없으면 추가, 존재하면 변경
      this.user[key] = value;
    },
    deleteObject(key) {
      // delete this.user[key];
      // const newUser = { ...this.user };
      // this.user = newUser;

      delete this.user[key];
    },
  },
};
</script>

<template>
  <h3>A12 Array & Object</h3>

  <ul class="list-group">
    <li
      class="list-group-item"
      v-for="(item, i) in names"
      :key="i">
      {{ i + 1 }} {{ item }}
    </li>
  </ul>

  <hr />

  <ul class="list-group mb-3">
    <li
      class="list-group-item"
      v-for="(value, key, i) in user"
      :key="key">
      {{ i + 1 }} {{ key.toUpperCase() }} - {{ value }}
    </li>
  </ul>

  <div class="mb-5">
    <button @click="addArray">ADD Array</button>
    <button @click="(evt) => updateArray(1, 2000)">Change Array</button>
    <button @click="() => deleteArray(1)">Delete Array</button>

    <button @click="() => addObject('address', 'Seoul')">ADD Object</button>
    <button @click="() => updateObject('address', 'Busan')">Change Object</button>
    <button @click="() => deleteObject('address')">Delete Object</button>
  </div>
</template>
