<script>
export default {
  computed: {
    contact() {
      return this.$store.state.contactStore.contact
    }
  },
  methods: {
    addContact() {
      this.$store.dispatch('contactStore/addContactAction', this.contact);
      this.$router.push({name: 'list'});
    }
  },
  created() {
    this.$store.commit('contactStore/clearContact');
  }
}
</script>

<template>
  <div class="container-fluid">
    <h3>Add Contact</h3>

    <div class="mb-3">
      Name: <input type="text" class="form-control" name="name"
        :value="contact.name" 
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
      Tel: <input type="text" class="form-control" name="tel"
        :value="contact.tel"
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
      Address: <input type="text" class="form-control" name="address"
        :value="contact.address"
        @input="(evt) => $store.commit('contactStore/changeContact', evt.target)" /><br />
    </div>
    
    <button class="btn btn-outline-primary" @click="addContact">ADD</button>
  </div>
</template>
