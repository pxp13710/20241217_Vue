<script>
export default {
  
}
</script>

<template>
  <!-- 
   정의하지 않은 기본형 변수 사용 => 경고 
    경고(warn)에 대한 처리는 main.js에서 일괄처리한다
    빌드하면 경고 메시지는 삭제된다
  -->
  <div v-if="isError">
    <h5>Child Component</h5>
  </div>  
</template>
