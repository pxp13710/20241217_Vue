<script>
export default {
  data() {
    return {
      msg: 'Hello World!!',
      isChecked: true,
      num: 0,
    };
  },
  computed: {
    myCSS() {
      return this.$style.one + ' ' + this.$style.two + ' ' + this.$style.three;
    },
  },
  mounted() {
    // console.log(this.$style);
  },
};
</script>

<template>
  <h3>Class Module</h3>

  <div class="mb-3">
    <div :class="$style.one">{{ msg }}</div>

    <!-- 연산 결과가 문자열이 되도록 처리 -->
    <div :class="`${$style.one} ${$style.two} ${$style.three}`">{{ msg }}</div>
    <div :class="[$style.one, $style.two, $style.three].join(' ')">{{ msg }}</div>
    <div :class="myCSS">{{ msg }}</div>
  </div>

  <div class="mb-3">
    <div :class="{ [$style.one]: isChecked, [$style.two]: true, [$style.three]: true,}">{{ msg }}</div>
    <div :class="{ [myCSS] : isChecked }">{{ msg }}</div>

    <div>
      <input type="checkbox" class="form-check-input" id="check" v-model="isChecked" />{{ ' ' }}
      <label class="form-check-label" for="check">CHECK</label>
    </div>
  </div>

  <div class="mb-5"></div>
</template>

<!-- module => CSS의 이름을 변경하고 this.$style이 원래이름: 변경된이름 형태로 관리 -->
<style module>
.one { color: orange; }
.two { font-size: 24pt; }
.three { font-weight: bold; }
</style>
