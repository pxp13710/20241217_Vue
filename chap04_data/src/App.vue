<script>
import A01Component from './components/A01Component.vue';
import A02Props from './components/A02Props.vue';

export default {
  components: {
    A01Component,
    A02Props,
  },
};
</script>

<template>
  <div class="m-3">
    <h1>Chap04 Data</h1>

    <A02Props></A02Props>
    <A01Component></A01Component>
  </div>
</template>
