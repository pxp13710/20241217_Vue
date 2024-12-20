/* eslint-disable no-unused-vars */
import { createWebHistory, createRouter } from 'vue-router';

// import 한 컴포넌트가 전체 화면에 각각 표시될 단일 또는 다중 View 
import A01Binding from './../views/A01Binding.vue';
import A02Attr from './../views/A02Attribute.vue';
import A03Params from './../views/A03Params.vue';
import A04Props from './../views/A04Props.vue';
import A05Contact from './../views/A05Contact.vue';
import A05Child from './../views/A05ContactChild.vue';
import A06Query from './../views/A06Query.vue';
// import A07Push from './../views/A07Push.vue';
// import A08Child from './../views/A08ChildRouter.vue';
// import A09NotFound from './../views/A09NotFound.vue';

// import CompanyInfo from './../components/CompanyInfo.vue';
// import CompanyWay from './../components/CompanyWay.vue';


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
      alias: ['/A02', '/Attrs'],
      beforeEnter(to, from) {
        console.log('------- beforeEnter -------');

        if (session.getItem('name')) return true;
        else return false;
      }
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
    { path: '/A05Child/:no', name: 'ctxChild', component: A05Child, props: true },

    // 사용할 값을 주소줄에 ?key=value&key=value#hash 형태로 전달
    { path: '/A06Query', name: 'query', component: A06Query },

    // 버튼 등을 이용(ACTION)한 이동 처리
    { path: '/A07Push', name: 'push', component: () => import('./../views/A07Push.vue') },

    // 하위 라우터 구현
    // A08Child 컴포넌트에 자식 요소가 표시될 영역을 <RouterView>로 지정해야 한다
    // 패스가 "/A08Child/...." 형태로 지정되면 A08Child의 RouterView에 표시된다
    {
      path: '/A08Child', name: 'child', component: () => import('./../views/A08ChildRouter.vue'),
      children: [
        // 하우라우터의 상대패스는 자동적으로 상위 패스가 앞에 붙는다
        { path: 'info', name: 'info', component: () => import('./../components/CompanyInfo.vue') },
        { path: 'way', name: 'way', component: () => import('./../components/CompanyWay.vue') },
        { path: '/A08Child/:no', name: 'view', component: A05Child, props: true },
      ]
    },

    // 위의 모든 패스와 매칭되지 않는 경우 표시할 컴포넌트 - 정의 위치는 상관없음
    { path: '/:path(.*)*', name: 'not', component: () => import('./../views/A09NotFound.vue') },
  ]
});

const session = globalThis.sessionStorage;
session.setItem('id', 'abc123');
session.setItem('name', 'abc123');
session.setItem('address', 'abc123');
session.setItem('tel', 'abc123');

// session.removeItem('id');

// 전역 Guard
router.beforeEach((to, from) => {
  console.log('------- beforeEach -------');
  // console.log(to);
  // console.log(from);

  if (session.getItem('id')) return true;
  else return false;
});

// beforeEach 실행 후, afterEach 실행 전
router.beforeResolve((to, from) => {
  console.log('------- beforeResolve -------');

  if (session.getItem('id')) return true;
  else return false;
});

router.afterEach((to, from) => {
  console.log('------- afterEach -------');
  // 리턴값이 존재하지 않음
  // 메모리 정리 등의 작업
})


export default router;
