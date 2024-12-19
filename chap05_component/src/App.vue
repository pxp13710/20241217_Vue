<script>
import A01DynamicComp from './components/A01DynamicComp.vue';
import A02DynamicComp from './components/A02DynamicComp.vue';
import A03Teleport from './components/A03Teleport.vue';

export default {
  components: { A01DynamicComp, A02DynamicComp, A03Teleport }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap05 Component</h1>

    <A03Teleport></A03Teleport>
    <A02DynamicComp></A02DynamicComp>
    <A01DynamicComp></A01DynamicComp>
  </div>
</template>
