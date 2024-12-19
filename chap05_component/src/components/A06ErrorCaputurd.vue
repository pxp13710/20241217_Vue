<script>
import A06ErrorChild from './children/A06ErrorChild.vue'

export default {
  components: { A06ErrorChild },

  // 하위 컴포넌트에서 발생한 에러를 잡아 처리할 목적으로 기술
  // 자신(컨테이너 컴포넌트)에서 발생한 에러는 상위(App.vue)에서 처리해야 한다
  errorCaptured(err, comp, info) {
    console.log('----- A06ErrorCaptured -----');
    console.log(err);
    console.log(comp);      // Error가 발생한 컴포넌트
    console.log(info);      // vue가 자체 제공하는 안내 문구

    comp.isError = false;

    // Error는 상위 컴포넌트로 전파 => A06Error은 App의 자식 컴포넌트
    // Child에서 발생한 에러는 곧 App에서 처리 가능한 에러

    // 상위 컴포넌트로 전파 안함 => false
    return true; 
  }
}
</script>

<template>
  <h3>A06 Error</h3>

  <hr>

  <div class="mb-5">
    <A06ErrorChild></A06ErrorChild>
  </div>
</template>
