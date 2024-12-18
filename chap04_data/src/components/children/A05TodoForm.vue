<script>
export default {
  props: ['addTodo'],
  data() {
    return {
      text: ''
    }
  },
  methods: {
    sendData() {
      if(this.text.trim() !== '') {
        this.addTodo(this.text);
        this.text = '';
        document.querySelector('input').focus();
      }
    }
  }
}
</script>

<template>
  <form>
    <div class="input-group">
      <input type="text" class="form-control" v-model="text"/>
      <div class="input-group-append">
        <button type="submit" class="btn btn-primary mr-1" @click.prevent="sendData">Submit</button>
      </div>
    </div>  
  </form>
</template>
