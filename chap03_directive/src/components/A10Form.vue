<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        num: 10,
        address: '',
        gender: '어린이',
        checkOne: true,
        checkTwo: '동의', // true => 동의, false => 동의 안함
        fruit: [],
        top: '',
        language: ['한국어', '스페인어'],
        command: '',
        user: {},
        message: '',
      },
    };
  },
  computed: {
    teams: () => ['한화', '기아', '엘지', '삼성', 'KT', '두산', '롯데'],
    langs: () => ['한국어', '영어', '프랑스어', '독일어', '스페인어'],
  },
  methods: {
    sendData() {
      console.log(this.formData);

      const spreadData = {
        ...this.formData,
        fruit: [...this.formData.fruit],
        language: [...this.formData.language],
        user: { ...this.formData.user },
      };
      console.log(spreadData);

      // JavaScript 객체 => JSON Data로 변경
      const jsonData = JSON.stringify(this.formData);
      console.log(jsonData);

      // JSON Data => JavaScript 객체로 변환
      const jsData = JSON.parse(jsonData);
      console.log(jsData);
    },
    changeMessage(evt) {
      if (evt.target.value.trim().length >= 5) {
        this.formData.message = evt.target.value.trim();
      }
    },
  },
};
</script>

<template>
  <h3>A10 Vue Form Element</h3>
  <br />

  <form
    method="GET"
    action="./index.html"
    class="mb-5">
    <!-- 좌우 공백 제거 => v-model.trim -->
    Text Field: <span class="orange">{{ formData.name }} / {{ formData.name.length }}</span
    ><br />
    <input
      type="text"
      class="form-control"
      v-model.trim="formData.name" /><br />

    <!-- 숫자로 형 변환 => v-model.number -->
    Number Field: <span class="orange">{{ formData.num + 1 }}</span
    ><br />
    <input
      type="number"
      class="form-control"
      v-model.number="formData.num" /><br />

    <!-- focus가 벗어나면 값 반영 => v-model.lazy -->
    Lazy Field: <span class="orange">{{ formData.address }}</span
    ><br />
    <input
      type="text"
      class="form-control"
      v-model.lazy="formData.address" /><br />

    <!-- 
      v-model은 기본적으로 위 3가지 속성만 제공 -> custom field를 v-model을 이용해 구현가능
      또는 v-bind:value와 @input를 이용해서 적절히 Guard를 구현 
    -->

    Radio Button: <span class="orange">{{ formData.gender }}</span
    ><br />
    <input
      type="radio"
      name="gender"
      value="남자"
      v-model="formData.gender" />Male <br />
    <input
      type="radio"
      name="gender"
      value="여자"
      v-model="formData.gender" />Female <br />
    <input
      type="radio"
      name="gender"
      value="어린이"
      v-model="formData.gender" />Children <br />
    <br />

    Single Check: <span class="orange">{{ formData.checkOne ? '동의' : '동의 안함' }}</span> <br />
    <input
      type="checkbox"
      name="check"
      v-model="formData.checkOne" />Agree <br />
    <br />

    Single Check: <span class="orange">{{ formData.checkTwo }}</span> <br />
    <input
      type="checkbox"
      name="check"
      v-model="formData.checkTwo"
      true-value="동의"
      false-value="동의 안함" />Agree <br />
    <br />

    CheckBox: <span class="orange">{{ formData.fruit }}</span
    ><br />
    <input
      type="checkbox"
      value="apple"
      v-model="formData.fruit" />사과 <br />
    <input
      type="checkbox"
      value="banana"
      v-model="formData.fruit" />바나나 <br />
    <input
      type="checkbox"
      value="melon"
      v-model="formData.fruit" />멜론 <br />
    <br />

    SelectBox: <span class="orange">{{ formData.top }}</span
    ><br />
    <select
      class="form-control"
      v-model="formData.top">
      <option value="">선택해주세요</option>
      <option
        v-for="team in teams"
        :key="team">
        {{ team }}
      </option>
    </select>
    <br />

    SelectBox Multi: <span class="orange">{{ formData.language }}</span
    ><br />
    <select
      class="form-control"
      multiple
      v-model="formData.language">
      <option
        v-for="item in langs"
        :key="item">
        {{ item }}
      </option>
    </select>
    <br />

    TextArea: <span class="orange">{{ formData.command }}</span>
    <textarea
      cols="50"
      rows="5"
      class="form-control"
      v-model="formData.command"></textarea>
    <br />

    Radio Button Object Value:
    <span class="orange">{{ formData.user }} / {{ formData.user?.name }}</span
    ><br />
    <input
      type="radio"
      name="person"
      v-bind:value="{ name: '놀부', age: 30 }"
      v-model="formData.user" />놀부 <br />
    <input
      type="radio"
      name="person"
      :value="{ name: '흥부', age: 25 }"
      v-model="formData.user" />흥부 <br />
    <input
      type="radio"
      name="person"
      :value="{ name: '방자', age: 20 }"
      v-model="formData.user" />방자 <br />
    <br />

    <!-- 제약조건이 필요하면 :value 와 @input 이벤트를 이용 -->
    Text Field: <span class="orange">{{ formData.message }}</span> <br />
    <input
      type="text"
      class="form-control"
      :value="formData.message"
      @input="changeMessage" /><br />

    <button
      type="submit"
      @click.prevent="sendData">
      SEND
    </button>
  </form>
</template>

<style scoped>
.orange {
  color: orange;
}
</style>
