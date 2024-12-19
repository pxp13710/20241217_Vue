<script>
import axios from 'axios';
import contactlist from './data/ContactList'

export default {
  data: function () {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      const item = this.contacts.find(item => item.no === Number(this.$route.params.no));
      // console.log(item);
      return item;
    },
    cno() {
      return Number(this.$route.params.cno);
    }
  },
  watch: {
    cno(newVal) {
      this.getContact(newVal)
    }
  },
  methods: {
    async getContact(cno) {
      try {
        const resp = await axios.get('http://localhost:8000/contacts/' + cno);
        // console.log(resp.data);
        this.contact = resp.data;
      } catch(err) {
        console.error(err);
      }
    }
  },
  created: function () {
    // 최초 1번만 요청된다. 즉 cno 값이 변경되도 다시 Ajax 요청을 하지 않음
    this.getContact(this.cno);
    // 주소줄에 관련된 모든 정보를 관리한다
    // console.log(this.$route);
  },
}
</script>

<template>
  <div>
    <h3>A03 Params</h3>

    <p>
      Full Path: {{ decodeURIComponent($route.fullPath) }}<br />
      Path: {{ decodeURIComponent($route.path) }}<br />
      href: {{ decodeURIComponent($route.href) }}<br />
      query: {{ decodeURIComponent($route.query) }}<br />
      hash: {{ decodeURIComponent($route.hash) }}<br />
    </p>

    <p>
      Name: {{ $route.params.name }}<br />
      No: {{ $route.params.no }}<br />
      Person: {{ person.no }} / {{ person.name }} <br />
    </p>

    <p>
      cNo: {{ $route.params.cno }}<br />
      Person: {{ contact.no }} / {{ contact.name }} <br />
      <img :src="contact.photo" alt="사진" width="80" />
    </p>
  </div>
</template>
