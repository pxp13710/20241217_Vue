<script>
import * as bootstrap from 'bootstrap/dist/js/bootstrap.esm.js'
import axios from 'axios'
import Swal from 'sweetalert2'

const baseURL = 'http://localhost:8000/contacts/'

export default {
  data() {
    return {
      getContentModal: '',
      updateContentModal: '',
      addContentModal: '',

      contactList: { pageno: '', pagesize: '', totalcount: '', contacts: [] },
      contact: { no: '', name: '', tel: '', address: '', photo: '' },
    }
  },
  methods: {
    viewUpdate() {
      this.getContentModal.hide()
      this.updateContentModal.show()
    },
    viewAdd() {
      // 이전에 참조한 값이 남아 있을때를 대비해서 비우고 모달창 열기
      this.contact = { no: '', name: '', tel: '', address: '', photo: '' }
      this.addContentModal.show()
    },
    async getContactList(no = 1, size = 5) {
      try {
        const params = { pageno: no, pagesize: size }
        const headers = {}
        const resp = await axios.get(baseURL, { params, headers })
        this.contactList = resp.data
      } catch (err) {
        console.error(err)
      }
    },
    async getContact(no) {
      this.getContentModal.show()
      try {
        const params = {}
        const headers = {}
        const resp = await axios.get(baseURL + no, { params, headers })
        this.contact = resp.data
      } catch (err) {
        console.error(err)
      }
    },
    async deleteContact(no) {
      try {
        const resp = await axios.delete(baseURL + no)
        if (resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '데이터 삭제 성공', icon: 'success' })
        } else if (resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '데이터 삭제 실패', icon: 'error' })
        }
      } catch (err) {
        console.error(err)
      }
      this.getContentModal.hide()

      // 또는 현재 contactList의 contacts에서 해당 번호 게시물 삭제
      // this.getContactList(1, 7);
      const idx = this.contactList.contacts.findIndex((item) => item.no === no)
      this.contactList.contacts.splice(idx, 1)
    },
    async updateContact() {
      try {
        const params = {}
        const headers = { 'Content-Type': 'application/json' }
        const resp = await axios.put(baseURL + this.contact.no, this.contact, { params, headers })
        if (resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '데이터 수정 성공', icon: 'success' })
        } else if (resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '데이터 수정 실패', icon: 'error' })
        }
      } catch (err) {
        console.error(err)
      }
      this.updateContentModal.hide()
      // 수정된 사항을 다시 불러와 contactList 갱신 => 화면 변경
      this.getContactList(1, 7)
    },
    async addContact() {
      try {
        const params = {}
        const headers = { 'Content-Type': 'application/json' }
        const resp = await axios.post(baseURL + this.contact.no, this.contact, { params, headers })
        if (resp.data.status === 'success') {
          Swal.fire({ title: 'SUCCESS', text: '데이터 입력 성공', icon: 'success' })
        } else if (resp.data.status === 'fail') {
          Swal.fire({ title: 'FAIL', text: '데이터 입력 실패', icon: 'error' })
        }
      } catch (err) {
        console.error(err)
      }
      this.addContentModal.hide()
      // 수정된 사항을 다시 불러와 contactList 갱신 => 화면 변경
      this.getContactList(1, 7)
    },
  },

  mounted() {
    this.getContactList(1, 7)
    this.getContentModal = new bootstrap.Modal(document.getElementById('getContent'), {
      keyboard: false,
    })
    this.updateContentModal = new bootstrap.Modal(document.getElementById('updateContent'), {
      keyboard: false,
    })
    this.addContentModal = new bootstrap.Modal(document.getElementById('addContent'), {
      keyboard: true,
    })
  },
}
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>No</th>
          <th>Name</th>
          <th>Tel</th>
          <th>Address</th>
          <th>Photo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="contact in contactList?.contacts" :key="contact.no">
          <td>{{ contact.no }}</td>
          <td>
            <a href="#" @click="() => getContact(contact.no)">{{ contact.name }}</a>
          </td>
          <td>{{ contact.tel }}</td>
          <td>{{ contact.address }}</td>
          <td><img :src="contact.photo" alt="사진" width="70" /></td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-primary" @click="viewAdd">ADD</button>

    <!-- Get Contact Modal -->
    <div
      class="modal fade"
      id="getContent"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Get Contact</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            Name: <input type="text" class="form-control" disabled :value="contact.name" /> Tel:
            <input type="text" class="form-control" disabled :value="contact.tel" /> Address:
            <input type="text" class="form-control" disabled :value="contact.address" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary" @click="() => deleteContact(contact.no)">
              DELETE
            </button>
            <button type="button" class="btn btn-primary" @click="viewUpdate">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Update Contact Modal -->
    <div
      class="modal fade"
      id="updateContent"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Update Contact</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- 제약조건이 필요하다면 :value와 @input 이벤트 핸들러로 구현해야 한다 -->
            Name: <input type="text" class="form-control" v-model.trim.lazy="contact.name" /> Tel:
            <input type="text" class="form-control" v-model.trim="contact.tel" /> Address:
            <input type="text" class="form-control" v-model.trim="contact.address" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary" @click="updateContact">UPDATE</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Add Contact Modal -->
    <div
      class="modal fade"
      id="addContent"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Contact</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- 제약조건이 필요하다면 :value와 @input 이벤트 핸들러로 구현해야 한다 -->
            Name: <input type="text" class="form-control" v-model.trim.lazy="contact.name" /> Tel:
            <input type="text" class="form-control" v-model.trim="contact.tel" /> Address:
            <input type="text" class="form-control" v-model.trim="contact.address" />
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">CLOSE</button>
            <button type="button" class="btn btn-primary" @click="addContact">ADD</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5"></div>
  </div>
</template>
