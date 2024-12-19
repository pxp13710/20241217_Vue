<script>
import A09ScopeSlotChild from './children/A09ScopeSlotChild.vue';

export default {
  components: { A09ScopeSlotChild },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A09 Scoped Slot</h3>

  <div class="mb-5">
    <A09ScopeSlotChild>
      <template v-slot="one">
        <p>
          User: {{ one.user?.name }} / {{ one.user?.age }} / {{ one.user?.abc }}<br>
          KOR: {{ one.kor }}<br>
          ENG: {{ one.eng }}<br>
          <button @click="() => one.changeKor(3000)">KOR</button>
        </p>
      </template>

      <!-- 여기에 요소가 추가되면 에러 발생 -->

      <template #jumsu="one">
        User: {{ one.user?.name }} / {{ one.user?.age }} / {{ one.user?.abc }}<br>
        KOR: {{ one.kor }}<br>
        ENG: {{ one.eng }}<br>
        <button @click="() => one.changeKor(3000)">KOR</button>
      </template>
    </A09ScopeSlotChild>
  </div>
</template>
