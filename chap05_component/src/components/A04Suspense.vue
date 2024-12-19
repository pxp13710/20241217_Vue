<script>
// npm i p-min-delay
import pMinDelay from 'p-min-delay';
import { defineAsyncComponent } from 'vue';

const A01About = defineAsyncComponent( () => {
  // 동적 import
  return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);
});

export default {
  components: { A01About },

}
</script>

<template>
  <h3>A04 Suspense - Vue3</h3>

  <div class="mb-5">
    <!-- default에 지정된 컴포넌트가 로드되기 전까지는 fallback에 지정한 요소가 표시 -->
    <Suspense>
      <template #default>
        <A01About></A01About>
      </template>
      <template #fallback>
        <h3>Loading.....</h3>
      </template>
    </Suspense>
  </div>
</template>


<style scoped>
.dialog { 
  position: fixed; top: 50px; left: 30%; width: 600px;
  height: 200px; z-index: 99999; border: 1px solid gray;
  background-color: white; padding: 10px;
}
</style>