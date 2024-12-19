<script>
import A08SlotNameChild from './children/A08SlotNameChild.vue';

export default {
  components: { A08SlotNameChild },
  data() {
    return {};
  },
};
</script>

<template>
  <h3>A08 Slot Name</h3>

  <div class="mb-5">
    <A08SlotNameChild>
      <!-- 
        v-slot은 반드시 template 태그로 정의해야 한다
        v-slot은 #으로 변경 사용 가능 

        template 이외의 테그로 기술된 요소는 모두 default에 병합되어 
        표시된다.

        template에 이름이 없으면 자식에 전달되지 않는다
      -->
      <div>자식에게 전달 할 View 01</div>

      <template v-slot:bottom>
        <h3>Footer Content</h3>
      </template>

      <template>자식에게 전달 할 View 02</template>

      <template v-slot:top>
        <h3>Top Content</h3>
      </template>

      <div>자식에게 전달 할 View 03</div>
      
      <template #left>
        <h3>Left Content</h3>
      </template>

      <template #right>
        <h3>Right Content</h3>
      </template>

      <div>자식에게 전달 할 View 04</div>

    </A08SlotNameChild>
  </div>
</template>
