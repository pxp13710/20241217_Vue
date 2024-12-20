<script>
import contactlist from './data/ContactList'

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
    }
  },
}
</script>

<template>
  <div>
    <h3>A05 Contacts</h3>

    <div>
      <span v-for="item in contacts" :key="item.no">
        <RouterLink :to="{name: 'ctxChild', params: {no: item.no}}">
          {{ item.name }}
        </RouterLink> | 
      </span>
    </div>
  </div>
</template>
