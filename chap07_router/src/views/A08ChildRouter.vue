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
    <h3>A08 Child Router</h3>

    <div>
      <RouterLink to="/A02">A02</RouterLink> | 
      <RouterLink to="/A08Child/info">INFO</RouterLink> | 
      <RouterLink to="/A08Child/way">WAY</RouterLink> | 
      <RouterLink :to="{name: 'way'}">WAY</RouterLink> | 
      
      <span v-for="item in contacts" :key="item.no">
        <RouterLink :to="{name: 'view', params: {no: item.no}}">
          {{ item.name }}
        </RouterLink> | 
      </span>

    </div>
    <br />

    <div>
      <RouterView></RouterView>
    </div>
  </div>
</template>
