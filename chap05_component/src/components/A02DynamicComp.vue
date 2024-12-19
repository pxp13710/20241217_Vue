<script>
import A01BannerHome from './children/A01BannerHome.vue'
import A01BannerAbout from './children/A01BannerAbout.vue'
import A01BannerNews from './children/A01BannerNews.vue'

export default {
  components: { A01BannerHome, A01BannerAbout, A01BannerNews },
  data() {
    return {
      current: 'A01BannerHome',
      keys: ['Home', 'About', 'News'],
    }
  },
  methods: {
    changeCurrent(name) {
      this.current = `A01Banner${name}`;
    }
  }
}
</script>

<template>
  <div id="container">
    <h3>A02 Keep Alive</h3>
    <ul>
      <li v-for="item in keys" :key="item">
        <a href="#" @click="() => changeCurrent(item)">{{ item.toUpperCase() }}</a>
      </li>
    </ul>

    <div class="mb-5">
      <!-- 
        KeepAlive로 컴포넌트가 cache화 된다
        include로 cache화 할 컴포넌트 지정 - 컴포넌트 이름으로 지정(import 이름이 아니다)
        exclude로 cache화 하지 않을 컴포넌트 지정
        include, exclude 이름은 , 다음에 스페이스 없이 이어서 지정해야 한다
        max로 cache화 할 컴포넌트 개수를 지정

        About은 cache화 되어 있음. 일부 내용을 로드될때 변경
      -->
      <KeepAlive include="homeComp,aboutComp" max="2">
        <component :is="current"></component>
      </KeepAlive>
    </div>
  </div>
</template>

<style scoped>
#container { width: 900px; }
#container>ul { margin: 0px; padding: 0px; }
#container>ul li { list-style-type: none; float: left; line-height: 160%;
  width: 300px; height: 40px; }
#container>ul li a { display: block; text-align: center; text-decoration: none;
  background-color: lightgray; color: #000; border: solid 1px Black; }
#container>div { border: 1px solid #c0c0c0; border-top: none; padding: 15px; font-size: smaller; }
</style>
