<script>
import A02PropsOne from './children/A02PropsOne.vue';
import A02PropsTwo from './children/A02PropsTwo.vue';

export default {
  components: { A02PropsOne, A02PropsTwo },
  data() {
    return {
      address: 'Seoul',
      arr: [10, 20],
      user: { name: 'HungBu', age: 30 },
    };
  },
  methods: {
    changeAddress(x) {
      this.address = x;
    },
    onAdd(x, y) {
      return `${x} + ${y} = ${x + y}`;
    },
  },
};
</script>

<template>
  <h3>A02 Props</h3>

  <div class="mb-5">
    <!-- 사용자 정의 태그에 HTML의 속성을 적용하면 적용안됨. 값으로 취급됨 -->
    <A02PropsOne
      type="date"
      :arr="arr"
      :user="user"
      :onAdd="onAdd"
      :age="20"
      :add="address"
      :changeAddress="changeAddress"
    ></A02PropsOne>
    <A02PropsOne type="time" :add="address"></A02PropsOne>

    <A02PropsTwo
      type="date"
      :arr="arr"
      :user="user"
      :onAdd="onAdd"
      :age="20"
      :add="address"
      :changeAddress="changeAddress"
    ></A02PropsTwo>
  </div>
</template>
