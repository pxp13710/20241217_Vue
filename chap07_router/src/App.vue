<script>
export default {
  
}
</script>

<template>
  <div class="m-3">
    <h1>Chap07 Router</h1>

    <div>
      <RouterLink to="/">INDEX</RouterLink> | 
      <RouterLink to="/attrs">A02</RouterLink> | 
      <RouterLink to="/A02">A02</RouterLink> | 
      
      <RouterLink :to="{ path: '/A03Params/1001/놀부/11' }">P 1001</RouterLink> | 
      <RouterLink :to="{ name: 'params', params:{no: 1002, name: '춘향', cno: 12} }">P 1002</RouterLink> | 

      <RouterLink :to="{ path: '/A04Props/1003/흥부/13' }">P 1003</RouterLink> | 
      <RouterLink :to="{ name: 'props', params:{no: 1004, name: '향단', cno: 14} }">P 1004</RouterLink> | 
    </div>

    <hr>

    <div>
      <RouterView name="default"></RouterView>
      <RouterView name="two"></RouterView>
    </div>
  </div>
</template>

<style>
  .router-link-exact-active { 
    color: orange;
    font-weight: bold;
  }
</style>
