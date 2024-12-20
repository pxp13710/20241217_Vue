import * as api from '@api/contact';

const CONTACT_GETCONTACTLIST = 'CONTACT_GETCONTACTLIST';
const CONTACT_GETCONTACT = 'CONTACT_GETCONTACT';
const CONTACT_ADDCONTACT = 'CONTACT_ADDCONTACT';
const CONTACT_DELETECONTACT = 'CONTACT_DELETECONTACT';
const CONTACT_UPDATECONTACT = 'CONTACT_UPDATECONTACT';

export default {
  namespaced: true,
  state: {
    contactList: { pageno: 1, pagesize: 5, totalcount: 0, contacts: [] },
    contact: { no: '', name: '', tel: '', address: '' }
  },
  mutations: {
    // payload => resp.data
    [CONTACT_GETCONTACTLIST]: (state, payload) => {
      console.log(state, payload);
      state.contactList = payload;
    },
    [CONTACT_GETCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_ADDCONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_DELETECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
    [CONTACT_UPDATECONTACT]: (state, payload) => {
      console.log(state, payload);
    },
  },
  actions: {
    // payload => { no: 1, size: 5 }
    getContactListAction: (action, payload) => {
      api.getContactList(payload.no, payload.size)
        .then(resp => action.commit(CONTACT_GETCONTACTLIST, resp.data))
        .catch(error => console.error(error))
    }
  }
}
