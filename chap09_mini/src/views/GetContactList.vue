<script>
export default {
  computed: {
    contactList() {
      // 1. store의 빈 데이터를 가져와서 먼저 View 완성
      // 2. 이 컴포넌트 mounted 또는 created 시점에 store의 전체 목록 조회 action 발생
      // 3. store의 action 항목에서 getContactListAction이 ajax를 요청해서 
      //    필요한 항목만을 추려낸 후 commit으로 mutations에 값을 전달
      // 4. mutations에서 호출된 함수가 state를 변경
      // 5. state에 상태변수가 변경되었으므로 이 store를 사용하는 컴포넌트에 통보
      // 6. 통보를 받은 현재 컴포넌트가 리 렌더링
      //    computed의 값이 변경되면서 변경된 값을 다시 참조
      // 7. 가져온 값 기반으로 컴포넌트 리 렌더링 => 화면 반영
      return this.$store.state.contactStore.contactList;
    }
  },
  methods: { },
  mounted() {
    this.$store.dispatch('contactStore/getContactListAction', {no: 1, size: 5})
  },
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th><th>Name</th><th>Tel</th><th>Address</th><th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>{{ contact.name }}</td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img :src="contact.photo" alt="Photo" width="70" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
