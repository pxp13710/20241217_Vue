<script>
// 여기에 정의된 값은 tempalte에서 사용할 수 없음
const data = {
  students: [
    { name: 'HongGilDong', age: 20, kor: 100, eng: 80 },
    { name: 'NolBu', age: 50, kor: 90, eng: 90 },
    { name: 'HungBu', age: 40, kor: 70, eng: 60 },
  ],
  items: [
    { id: 0, name: 'NolBu', age: 40 },
    { id: 1, name: 'HungBu', age: 30 },
    { id: 2, name: 'HangDan', age: 20 },
  ],
};

export default {
  data() {
    return {
      data,
      isChecked: true,
      name: 'nolbu',

    }
  }
};
</script>

<template>
  <h3>A04 DOM Directive</h3>
  <br />

  <h5>1. v-show</h5>
  <div v-show="isChecked">
    표시 / 숨김을 반복적으로 할 목적. DOM은 남아 있음(CSS)<br />
    v-show가 있는 엘리먼트는 항상 렌더링 되고 DOM에 남아있다는 점입니다.<br />
    v-show는 단순히 엘리먼트에 display CSS 속성을 토글합니다.
  </div>
  <br />

  <h5>2. v-if</h5>
  <div v-if="name === 'nolbu'">
    표시 / 숨김을 반복적으로 표시 할 목적(v-show와 동일)과 조건에 맞는 View만을 표시할 목적.<br />
    DOM에서 완전히 삭제된다 - CSS가 적용되어 있는 경우 디자인 깨짐에 주의<br />

    Vue에서는 v-if 디렉티브를 사용하여 조건부 블럭을 작성할 수 있습니다.
  </div>
  <div v-else-if="name === 'hungbu'">
    v-else-if와 v-else 사이에 다른 태그가 끼어 있으면 에러 발생<br />
    항상 근접 태그로 기술 할 필요가 있다<br />

    v-else-if는 이름에서 알 수 있듯, v-if에 대한 “else if 블록” 역할을 합니다.<br />
    또한 여러 개를 사용할 수 있습니다.
  </div>
  <div v-else>v-else 디렉티브를 사용하여 v-if에 대한 “else 블록”을 나타낼 수 있습니다</div>
  <br />

  <h5>3. v-for</h5>
  <table class="table">
    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Age</th>
        <th>Kor</th>
        <th>Eng</th>
      </tr>
    </thead>
    <tbody>
      <!-- key는 중복되지 않는 값으로 할당할 필요가 있다. v-bind:key="item.name + item.age"
      for(let i = 0; i < data.students.length; i++) { 
        const item = data.students[i];
      -->
      <tr v-for="(item, i) in data.students" v-bind:key="i">
        <td>{{ i }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.kor }}</td>
        <td>{{ item.eng }}</td>
      </tr>
    <!-- } -->
    </tbody>

    <tbody>
      <!-- 
        <tr v-for="(item, i) in data.students" v-bind:key="i" v-if="item.kor >= 90">
        v-if가 v-for보다 먼저 평가된다. 따라서 v-if의 item이 존재하지 않음

        이 경우 template 가상 태그로 v-for부터 먼저 구현
      -->
      <template  v-for="(item, i) in data.students" v-bind:key="i">
        <tr v-if="item.kor >= 90">
          <td>{{ i }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.kor }}</td>
          <td>{{ item.eng }}</td>
        </tr>
      </template>
      
    </tbody>
  </table>
  <br />

  <ul>
    <li v-for="item in data.items" :key="item.id">{{ item.id }} / {{ item.name }}</li>
  </ul>

  <!-- 객체도 반복 가능 -->
  <ul>
    <li v-for="(value, key, index) in data.students[0]" :key="key">
      {{ index }} - {{ key }} / {{ value }}
    </li>
  </ul>

  <!-- 연속된 숫자. 1부터 지정한 수까지 반복.  -->
  <ul>
    <li v-for="(value, i) in 5" :key="value">{{ i }} - {{ value }}</li>
  </ul>

  <!-- Map, Set도 반복 가능 -->

  <div class="mb-5">
    <button class="btn btn-outline-primary btn-sm" @click="isChecked = !isChecked">Check</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'nolbu'">IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'hungbu'">Else IF</button>
    <button class="btn btn-outline-primary btn-sm" @click="name = 'abc'">Else</button><br />
  </div>
</template>
