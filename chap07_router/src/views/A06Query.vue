<script>
import contactlist from './data/ContactList'

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    }
  },
  computed: {
    person() {
      const item = this.contacts.find(item => item.no === Number(this.$route.query.no));
      return item;
    },
  },
  mounted() {
    // console.log(this.$route);
  }
}
</script>

<template>
  <div>
    <h3>A06 Query</h3>

    <div>
      Name: {{ $route.query.name }}<br />
      No: {{ $route.query.no }}<br />
      Person: {{ person.no }} / {{ person.name }}<br />
      Hash: {{ $route.hash }}
    </div>
  </div>
</template>
