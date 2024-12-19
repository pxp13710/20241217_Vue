<script>
import axios from 'axios'

// https://sample.bmaster.kro.kr/contacts_long/search/
const baseURL = 'http://localhost:8001/contacts/'

export default {
  data: function () {
    return { data: '' }
  },
  methods: {
    getContactList(no = 1, size = 10) {
      // axios.get(baseURL, {
      //   params: {pageno: no, pagesize: size},
      //   header: {'Content-Type': 'application/json'},
      //   timeout: 3000,
      // })

      const params = { pageno: no, pagesize: size }
      const header = { 'Content-Type': 'application/json' }
      axios
        .get(baseURL, { params, header, timeout: 3000 })
        .then((resp) => {
          // console.log(resp);
          this.data = JSON.stringify(resp.data, '', 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    async getContactListAsync(no = 1, size = 10) {
      try {
        const params = { pageno: no, pagesize: size }
        const header = {}
        const resp = await axios.get(baseURL, { params, header, timeout: 3000 })
        this.data = JSON.stringify(resp.data, '', 4)
      } catch (error) {
        console.error(error)
      }
    },
    getContact(no) {
      axios({
        method: 'GET',
        url: baseURL + no,
        params: {},
        data: '', // post, put에서 서버에 전송할 값을 지정
        headers: {}, // header 정보 기술
        timeout: 3000,
      })
        .then((resp) => {
          // console.log(resp);
          this.data = JSON.stringify(resp.data, '', 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    addContact() {
      const data = { name: '강감찬', tel: '010-2222-3339', address: '서울시' }

      const params = {}
      const headers = { 'Content-Type': 'application/json' }
      axios
        .post(baseURL, data, { params, headers, timeout: 3000 })
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    updateContact(no) {
      const data = { no, name: '이순신', tel: '010-2222-2222', address: '한산' }

      const params = {}
      const headers = { 'Content-Type': 'application/json' }
      axios
        .put(baseURL + no, data, { params, headers, timeout: 3000 })
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
    deleteContact(no) {
      axios
        .delete(baseURL + no)
        .then((resp) => {
          this.data = JSON.stringify(resp.data, '', 4)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  },
}
</script>

<template>
  <div>
    <h3>A01 Axios</h3>

    <div>
      <button @click="() => getContactList(1, 5)">Get ContactList</button>
      <button @click="() => getContactListAsync(2, 5)">Get ContactList Async</button>
      <button @click="() => getContact(2)">Get Contact</button>
      <button @click="addContact">Add Contact</button>
      <button @click="() => updateContact(1734586324626)">Update Contact</button>
      <button @click="() => deleteContact(1734586324626)">Delete Contact</button>
    </div>

    <div>
      <textarea cols="100" rows="10" readonly :value="data"></textarea>
    </div>
  </div>
</template>
