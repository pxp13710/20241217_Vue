<script>
import axios from 'axios';
import contactlist from './data/ContactList'

export default {
  props: ['no', 'name', 'cno'],
  data() {
    return {
      contacts: contactlist.contacts,
      contact: { no: '', name: '', tel: '', address: '', photo: '' }
    }
  },
  computed: {
    person() {
      const item = this.contacts.find(item => item.no === Number(this.no));
      return item;
    },
  },
  methods: {
    async getContact(cno) {
      try {
        const resp = await axios.get('http://localhost:8000/contacts/' + cno);
        this.contact = resp.data;
      } catch(err) {
        console.error(err);
      }
    }
  },
  watch: {
    cno(newVal) {
      this.getContact(newVal)
    }
  },
  created: function () {
    // 최초 1번만 요청된다. 즉 cno 값이 변경되도 다시 Ajax 요청을 하지 않음
    this.getContact(this.cno);
  },
}
</script>

<template>
  <div>
    <h3>A04 Props</h3>

    <div>
      Name: {{ name }}<br />
      No: {{ no }}<br />
      Person: {{ person.no }} / {{ person.name }} <br />
    </div>

    <p>
      cNo: {{ $route.params.cno }}<br />
      Person: {{ contact.no }} / {{ contact.name }} <br />
      <img :src="contact.photo" alt="사진" width="80" />
    </p>
  </div>
</template>
