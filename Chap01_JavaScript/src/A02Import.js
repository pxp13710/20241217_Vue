// 개별 export 또는 { }로 export된 항목을 불러와 사용
// 사용할 변수명은 export한 이름(변수명)과 동일한 이름으로 정의해야 한다
// 이미 변수명이 사용되어 있으면 as로 변경해서 사용
import { name as nick, age, check, arr, user, add } from './A02ExportOne.js'

// 개별 export가 많은 경우 하나의 이름으로 묶어서 사용도 가능
import * as one from './A02ExportOne.js'
// console.log(one);

// default import는 {} 없이 중복되지 않는 임의의 이름으로 선언해서 사용
// import two from './A02ExportTwo.js'
// import { x, y } from './A02ExportTwo.js'

// 항상 default가 먼저 정의되어야 한다. 뒤에 오면 에러
import two, { x, y, newAge } from './A02ExportTwo.js'


// 자바스크립트에서 객체가 존재하는 경우 참조하는 요소의 값이 정의되지 않아도
// 에러가 아닌 undefined가 출력된다
// Vue에서는 undefined와 null 값은 화면에 아무것도 출력되지 않는다.
const dom = `
  Name: ${nick} / ${one.name}<br>
  Age: ${age} / ${one.age}<br>
  Check: ${check}<br>
  Array: ${arr[0]} / ${one.arr[1]} / ${arr[2]}<br>
  Object: ${user.name} / ${one.user.age} / ${one.user.address}<br>
  onAdd: ${add(10, 20)} / ${one.add(20, 30)}<br>

  <hr>

  progName: ${two.progName}<br>
  getName: ${two.getName()}<br>
  getTotal: ${two.total(100, 90)}<br>
  getAvg: ${two.avg(190, 2)}<br>
  X, Y: ${x} / ${y} / ${newAge}<br>
`;

// console 출력
console.log(dom);

// dom에 출력
document.getElementById('app').innerHTML = dom;
