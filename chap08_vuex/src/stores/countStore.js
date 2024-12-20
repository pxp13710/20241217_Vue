const countStore = {
  // 상태변수. 이 변수가 변경되면 이 스토어를 watching하는 모든 컴포넌트가 
  // 변경된 값을 기반으로 리 렌더링
  namespaced: true,
  state: {
    storeName: 'Count Store',
    count: 0,
    contacts: [
      { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
      { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
      { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
      { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
      { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
      { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
      { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
      { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
      { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' },
    ],
  },
  // state에 직접 접근해서 값을 변경할 메서드를 기술
  // 각 컴포넌트에서는 commit(메서드명, 매개변수) 형태로 호출한다
  // Pinia에서는 없음
  mutations: {
    increase: (state, payload) => {
      // console.log(state);
      // console.log(payload);
      state.count = state.count + payload;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    decreaseTwo: (state, payload) => {
      state.count = state.count - payload;
    }
  },

  // mutations의 컴포넌트가 state를 변경하기 전 처리 작업(시간 걸리는 작업)을 정의
  // 컴포넌트에서는 dispatch(메서드명, 매개변수) 형태로 호출한다
  // state를 직접 변경 가능
  actions: {
    decreaseAction: (action, payload) => {
      // console.log(action);      // state, commit, dispatch
      // console.log(payload);     // 넘어오는 값
      let value = Number(payload);
      if (Number.isNaN(value)) value = 0;

      setTimeout(() => {
        action.commit('decreaseTwo', value);
      }, 1000)
    }
  },
  // computed와 동일. state 값 기반으로 새로운 값이 필요한 경우 정의
  getters: {
    contactSize: (state) => state.contacts.length,
    firstItem: (state) => state.contacts[0],
    getItem: (state) => (no) => state.contacts.find(item => item.no === no),
  },
  // main.js에 등록할 수 있는 파일은 1개만 가능
  // 필요에 따라 하위 module로 구성
  modules: {}
};
export default countStore;


/*
import { createStore } from 'vuex';

const countStore = createStore({
  // 상태변수. 이 변수가 변경되면 이 스토어를 watching하는 모든 컴포넌트가 
  // 변경된 값을 기반으로 리 렌더링
  state: {
    storeName: 'Count Store',
    count: 0,
    contacts: [
      { no: 1001, name: '김유신', tel: '010-1212-3331', address: '경주' },
      { no: 1002, name: '장보고', tel: '010-1212-3332', address: '청해진' },
      { no: 1003, name: '관창', tel: '010-1212-3333', address: '황산벌' },
      { no: 1004, name: '안중근', tel: '010-1212-3334', address: '해주' },
      { no: 1005, name: '강감찬', tel: '010-1212-3335', address: '귀주' },
      { no: 1006, name: '정몽주', tel: '010-1212-3336', address: '개성' },
      { no: 1007, name: '이순신', tel: '010-1212-3337', address: '통제영' },
      { no: 1008, name: '김시민', tel: '010-1212-3338', address: '진주' },
      { no: 1009, name: '정약용', tel: '010-1212-3339', address: '남양주' },
    ],
  },
  // state에 직접 접근해서 값을 변경할 메서드를 기술
  // 각 컴포넌트에서는 commit(메서드명, 매개변수) 형태로 호출한다
  // Pinia에서는 없음
  mutations: {
    increase: (state, payload) => {
      // console.log(state);
      // console.log(payload);
      state.count = state.count + payload;
    },
    decrease: (state) => {
      state.count = state.count - 1;
    },
    decreaseTwo: (state, payload) => {
      state.count = state.count - payload;
    }
  },

  // mutations의 컴포넌트가 state를 변경하기 전 처리 작업(시간 걸리는 작업)을 정의
  // 컴포넌트에서는 dispatch(메서드명, 매개변수) 형태로 호출한다
  // state를 직접 변경 가능
  actions: {
    decreaseAction: (action, payload) => {
      // console.log(action);      // state, commit, dispatch
      // console.log(payload);     // 넘어오는 값
      let value = Number(payload);
      if (Number.isNaN(value)) value = 0;

      setTimeout(() => {
        action.commit('decreaseTwo', value);
      }, 1000)
    }
  },
  // computed와 동일. state 값 기반으로 새로운 값이 필요한 경우 정의
  getters: {
    contactSize: (state) => state.contacts.length,
    firstItem: (state) => state.contacts[0],
    getItem: (state) => (no) => state.contacts.find(item => item.no === no),
  },
  // main.js에 등록할 수 있는 파일은 1개만 가능
  // 필요에 따라 하위 module로 구성
  modules: {
    todoList: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {},
      getters: {},
      modules: {}
    }
  }
});
export default countStore;
*/