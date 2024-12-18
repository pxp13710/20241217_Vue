<script>
import A03EmitChild from './children/A03EmitChild.vue';
export default {
  components: { A03EmitChild },
  data() {
    return {
      num: '',
      obj: { num: '', name: '', arr: [], user: {} },
    };
  },
  methods: {
    getNumber(evt) {
      // console.log(evt);
      this.num = evt;
    },
    getObject(evt) {
      console.log(evt);
      this.obj = evt;
    }
  },
};
</script>

<template>
  <h3>A03 Emits</h3>

  <div class="mb-3">
    Number: {{ num }}<br />
    Number: {{ obj.num }}<br />
    Name: {{ obj.name }}<br />
    Array: {{ obj.arr?.[0] }} / {{ obj.arr?.[1] }} / {{ obj.arr?.[2] }}<br />
    User: {{ obj.user?.name }} / {{ obj.user?.age }} / {{ obj.user?.address }}<br />
  </div>

  <hr />

  <div class="mb-5">
    <A03EmitChild @numEvent="getNumber" @objEvent="getObject"></A03EmitChild>
  </div>
</template>
