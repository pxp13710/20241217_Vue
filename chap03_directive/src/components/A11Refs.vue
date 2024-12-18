<script>
export default {
  data() {
    return {
      message: 'Hello World',
    };
  },
  methods: {
    changeMessage() {
      // this.message = document.querySelector('input[name="msg"]').value;
      
      // 참조할 요소에 ref="중첩되지 않는 이름"
      // console.log(this.$refs);
      // document.querySelector('input[name="msg"]') => this.$refs.msgRef
      this.message = this.$refs.msgRef.value;
      this.$refs.btnRef.style.color = 'black';
    }
  },
};
</script>

<template>
  <h3>A11 Refs</h3>
  
  <form class="mb-3">
    <div class="input-group">
      <input type="text" class="form-control" name="msg"  ref="msgRef" />
      <button type="submit" class="btn btn-danger"        ref="btnRef"
         @click.prevent="changeMessage">ADD</button>
    </div>
  </form>

  <div class="mb-5">
    Message: {{ message }}
  </div>
</template>
