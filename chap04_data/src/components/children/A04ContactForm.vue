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
      // v-model 또는 :value @input을 이용하여 상태 변수 변경 후 그 값 참조하여 구현
      if(this.keyword.trim().length >= 2) {
        this.$emit('searchEvent', this.keyword);
      }
      */
     
      // 비제어 컴포넌트
      // 상태변수를 제어하지 않음 - DOM 요소에 접근하여 값을 취득. 그 값을 이용하여 구현
      // const elem = document.querySelector('input');
      // if(elem.value.trim().length >= 2) {
      //   this.$emit('searchEvent', elem.value.trim());
      // }

      // Vue에서 제공하는 this.$refs를 이용
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
