<script>
import A01Component from './components/A01Component.vue';
import A02Props from './components/A02Props.vue';
import A03Emits from './components/A03Emits.vue';
import A04Contact from './components/A04Contact.vue';
import A05TodoList from './components/A05TodoList.vue';
import A06Provide from './components/A06Provide.vue';
import A06TodoList from './components/A06TodoList/A05TodoList.vue';
import A07Slot from './components/A07Slot.vue';

export default {
  components: {
    A01Component, A02Props, A03Emits, A04Contact, A05TodoList,
    A06Provide, A06TodoList, A07Slot, 
  },
};
</script>

<template>
  <div class="m-3">
    <h1>Chap04 Data</h1>

    <A07Slot></A07Slot>
    <A06TodoList></A06TodoList>
    <A06Provide></A06Provide>
    <A05TodoList></A05TodoList>
    <A04Contact></A04Contact>
    <A03Emits></A03Emits>
    <A02Props></A02Props>
    <A01Component></A01Component>
  </div>
</template>
