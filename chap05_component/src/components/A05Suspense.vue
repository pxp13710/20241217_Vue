<script>
import { defineAsyncComponent } from 'vue';
// import pMinDelay from 'p-min-delay';

import ErrorComp from './children/ErrorComp.vue';
import LoadComp from './children/LoadComp.vue';

const A04About = defineAsyncComponent({
  loader() {
    // return pMinDelay(import('./children/A01BannerAbout.vue'), 2000);

    return new Promise((resolve, reject) => {
      setTimeout((flag) => {
        if(flag) resolve(import('./children/A01BannerAbout.vue'))
        else reject(new Error('파일을 찾을 수 없습니다..'))
      }, 2000, true);   // true => flag에 대입되는 값
    })
  },
  onError(err, retry, fail, cnt) {
    console.log(cnt);
    if(err && cnt < 3) retry();   // 재 시도
    else fail();                  // 최종 에러 처리
  },
  errorComponent: ErrorComp,
  loadingComponent: LoadComp,
  delay: 500,               // #fallback에서 지정한 컴포넌트가 표시될때 지연시간
  timeout: 5000,            // 지정시간내에 로딩되지 않으면 에러 처리
  suspensible: false,       // false => loadingComponent가 #fallback보다 우선 표시
});

export default {
  components: { A04About },
}
</script>

<template>
  <h3>A05 Suspense - Vue3</h3>

  <div class="mb-5">
    <Suspense>
      <template #default>
        <A04About></A04About>
      </template>
      <template #fallback>
        <h3>Loading.....</h3>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.dialog { 
  position: fixed; top: 50px; left: 30%; width: 600px;
  height: 200px; z-index: 99999; border: 1px solid gray;
  background-color: white; padding: 10px;
}
</style>