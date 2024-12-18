<script>
export default {
  emits: ['searchEvent'],
  data() {
    return {
      keyword: '',
    };
  },
  methods: {
    sendSearchData() {
      /*
      // 제어 컴포넌트(리엑트) - 상태변수를 이용
      if(this.keyword.trim().length >= 2) {
        this.$emit('searchEvent', this.keyword);
      }
      */
     
      // 비제어 컴포넌트
      // const elem = document.querySelector('input');
      // if(elem.value.trim().length >= 2) {
      //   this.$emit('searchEvent', elem.value.trim());
      // }

      if(this.$refs.searchRef.value.trim().length >= 2) {
        this.$emit('searchEvent', this.$refs.searchRef.value.trim());
      }
      
    }
  }
};
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control"   v-model="keyword" ref="searchRef"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" 
          @click.prevent="sendSearchData">Submit</button>
      </div>
    </div>
  </form>
</template>
