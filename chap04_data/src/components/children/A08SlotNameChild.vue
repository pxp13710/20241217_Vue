<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <h5>A08 Slot Named</h5>

  <div class="row card-body mb-5">
    <div class="col-12 border">
      <slot name="top">TOP</slot>
    </div>
    <div class="col-4 border">
      <slot name="left">LEFT</slot>
    </div>
    <div class="col-8 border">
      <slot name="right">RIGHT</slot>
    </div>
    <div class="col-12 border">
      <slot name="bottom">FOOTER</slot>
    </div>

    <div class="col-12">
      <!-- name 속성을 지정하지 않으면 name="default"와 동일 -->
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.border {
  border: 1px solid lightgray;
}
</style>
