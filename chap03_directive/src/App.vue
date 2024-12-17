<script>
// template에서 사용할 변수, 함수, 이벤트 핸들러 등을 기술한다
// View Model이라 한다
import A01Comp from './components/A01Component.vue';
import HelloWorld from './components/HelloWorld.vue';
import IconCommunity from './components/icons/IconCommunity.vue';
import A02Binding from './components/A02Binding.vue';
import A03Attribute from './components/A03Attribute.vue';
import A04MakeDOM from './components/A04MakeDOM.vue';
import A05Method from './components/A05Method.vue';
import A06Computed from './components/A06Computed.vue';
import A07Watch from './components/A07Watch.vue';
import A08LifeCycle from './components/A08LifeCycle.vue';

// export default 내부에 선언된 변수, 함수만 template에서 사용 가능
export default {
  components: { 
    A01Comp, HelloWorld, IconCommunity, A02Binding, A03Attribute, 
    A04MakeDOM, A05Method, A06Computed, A07Watch, A08LifeCycle, 

   },
  data() {
    return {
      x: 10,
    };
  },
};
</script>

<template>
  <!-- 내부적으로는 HTML과 동일하게 기술한다. Style과 더불어 View라 한다 -->
  <div class="m-3">
    <h1>
      <IconCommunity></IconCommunity>
      Chap03 Directive
    </h1>

    <A08LifeCycle></A08LifeCycle>
    <A07Watch></A07Watch>
    <A06Computed></A06Computed>
    <A05Method></A05Method>
    <A04MakeDOM></A04MakeDOM>
    <A03Attribute></A03Attribute>
    <A02Binding></A02Binding>

    <img
      src="./assets/images/one.jpg"
      alt="one"
    />
    <img
      src="./assets/logo.svg"
      alt="logo"
      width="100"
    />

    <img
      src="/images/tree.jpg"
      alt="tree"
    />

    <A01Comp></A01Comp>

    <!-- 사용자 정의 태그(View)는 반드시 종료 태그가 있어야 한다 -->
    <HelloWorld msg="전달하는 값" />

    <div style="width: 100px">
      <HelloWorld msg="Good Morning" />
    </div>
  </div>
</template>
