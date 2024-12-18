<script>
export default {
  props: ['contactList'],
};
</script>

<template>
  <table class="table mb-5">
    <thead>
      <tr>
        <th>번호</th>
        <th>이름</th>
        <th>전화번호</th>
        <th>주소</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in contactList" :key="item.no">
        <td>{{ item.no }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.tel }}</td>
        <td>{{ item.address }}</td>
      </tr>
    </tbody>
  </table>
</template>

