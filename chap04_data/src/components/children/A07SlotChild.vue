<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <h5>A07 Slot Child Component</h5>

  <div class="mb-5">
    <p>부모 컴포넌트가 전달한 View가 표시되는 영역을 slot 태그로 지정</p>
    
    <slot>필요에 따라 기본 View를 정의할 수 있다</slot>
  </div>
</template>
