<script>
export default {
  inject: ['addTodo', 'text', 'changeText'],
  data() {
    return {
      // text: ''
    }
  },
  methods: {
    sendData() {
      // 모두 부모가 전달한 값으로 사용
      if(this.text.trim() !== '') {
        this.addTodo(this.text);
        this.changeText('');
        document.querySelector('input').focus();
      }


      // 제어 컴포넌트
      /*
      if(this.text.trim() !== '') {
        this.addTodo(this.text);
        this.text = '';
        document.querySelector('input').focus();
      }
      */

      /*
      // 비 제어 컴포넌트
      // const elem = document.querySelector('input');
      const elem = this.$refs.todoRef;
      if(elem.value.trim() !== '') {
        this.addTodo(elem.value.trim());
        elem.value = '';
        elem.focus();
      }
      */
    }
  }
}
</script>

<template>
  <form>
    <div class="input-group">
      <!-- <input type="text" class="form-control" v-model="text"  ref="todoRef"/> -->

      <!-- text가 읽기전용 => v-model 사용불가 => 부모에서 변경작업을 메서드로 전달 -->
      <input type="text" class="form-control"  ref="todoRef"  
        :value="text" @input="(evt) => changeText(evt.target.value)" />
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>
