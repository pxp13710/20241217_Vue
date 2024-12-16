import { age } from './A02ExportOne.js';

// ES2015 이전의 모듈 정의 방식
const jumsu = (function () {
  const progName = '점수 프로그램';
  const name = '놀부';

  const getName = function () {
    return name;
  };
  const getTotal = function (x, y) {
    return x + y;
  };
  const getAvg = function (total, num) {
    return total / num;
  };

  return {
    progName,
    getName,
    total: getTotal,
    avg: getAvg,
  };
})();
// console.log(jumsu);

// default는 한 파일에서 1개의 요소만 지정가능. 2번 지정하면 에러
// 보통 여러 값을 묶은 객체에 자주 사용한다
export default jumsu;

// 개별 export는 default와 별개로 얼마든지 가능
export const x = 10;
export const y = 20;

// import한 값을 바로 export를 붙여 출력하면 에러
const newAge = age + 100;
export { newAge };

// console.log(globalThis);