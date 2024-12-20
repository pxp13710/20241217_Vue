<script>
// npm i bootstrap axios vuex vue-router sweetalert2 vuejs-paginate-next
import HeaderLink from './components/HeaderLink.vue'

export default {
  components: { HeaderLink }
}
</script>

<template>
  <div class="m-3">
    <h1>Chap08 Vuex Contact</h1>
    
    <HeaderLink></HeaderLink>

    <hr>

    <RouterView />
  </div>
</template>
