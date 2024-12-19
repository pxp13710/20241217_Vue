import { createWebHistory, createRouter } from 'vue-router';

// import 한 컴포넌트가 전체 화면에 각각 표시될 단일 또는 다중 View 
import A01Binding from './../views/A01Binding.vue';
import A02Attr from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05Child from './../views/A05ContactChild.vue';
import A06Query from './../views/A06Query.vue';
import A07Push from './../views/A07Push.vue';
import A08Child from './../views/A08ChildRouter.vue';
import A09NotFound from './../views/A09NotFound.vue';

// 이 패스에 표시될 컴포넌트가 프로젝트 시작시 등록되야 하므로
// main.js에 이 파일을 등록한다
const router = createRouter({
  history: createWebHistory(),
  // 지정한 패스가 브라우저의 주소줄에 설정되면 해당 컴포넌트가
  // App의 <RouterView>에 표시된다
  routes: [
    { path: '/', name: 'index', component: A01Binding },
    {
      path: '/attrs', name: 'attrs',
      components: {
        default: A02Attr,
        two: A01Binding
      },
      alias: ['/A02', '/Attrs']
    },
    // path를 이용해서 값을 전달
    // ":변수명" 도 패스로써 역할을 한다
    // RouterLink to="/A03Params/1001/놀부/11"
    // const no = '1001'; const name="놀부"; const cno = 11;과 같다
    // 값은 A03Params에서 받아 처리한다
    { path: '/A03Params/:no/:name/:cno', name: 'params', component: A03Params },

    // props: true => 위와 동일. 다만 패스 값을 props로 받아 처리한다
    { path: '/A04Props/:no/:name/:cno', name: 'props', component: A04Props, props: true },

    { path: '/A05Contact', name: 'contact', component: A05Contact },
    { path: '/A05Child', name: 'ctxChild', component: A05Child },

    { path: '/A06Query', name: 'query', component: A06Query },
    { path: '/A07Push', name: 'push', component: A07Push },
    { path: '/A08Child', name: 'child', component: A08Child },
    { path: '/:path(.*)', name: 'not', component: A09NotFound },
  ]
})
export default router;
