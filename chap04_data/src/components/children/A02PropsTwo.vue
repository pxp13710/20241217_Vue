<script>
export default {
  props: ['type', 'age', 'add', 'arr', 'user', 'onAdd', 'changeAddress'],
  data() {
    return {};
  },
};
</script>

<template>
  <h5>A02 Props Child TWO</h5>

  <div class="mb-5">
    Today: {{ type }}<br />
    Age: {{ age + 1 }}<br />
    Address: {{ add }}<br />
    Array: {{ arr[0] }} / {{ arr[1] }} / {{ arr[2] }}<br />
    User: {{ user.name }} / {{ user.age }} / {{ user.address }}<br />
    onAdd: {{ onAdd(10, 20) }}<br />
    <button @click="() => changeAddress('광주')">ADDRESS</button>
  </div>
</template>
