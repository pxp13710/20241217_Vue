<script>
import A07SlotChild from './children/A07SlotChild.vue';
import A01Component from './A01Component.vue';

export default {
  components: { A07SlotChild, A01Component },
  data() {
    return {
      name: 'A07 Parent'
    };
  },
  methods: {
    changeName() {
      this.name = 'A07 Change Name';
    }
  }
};
</script>

<template>
  <h3>A07 Slot</h3>

  <div class="mb-5">
    <A07SlotChild>
      <div>
        <h5>ONE / {{ name }}</h5>
        <div>This is ONE</div>
        <button @click="changeName">Name</button>

        <A01Component></A01Component>
      </div>
    </A07SlotChild>

    <A07SlotChild>
      <div>
        <h5>TWO / {{ name }}</h5>
        <div>Good Afternoon!!!</div>
        <button @click="changeName">Name</button>
      </div>
    </A07SlotChild>

    <A07SlotChild></A07SlotChild>
  </div>
</template>
