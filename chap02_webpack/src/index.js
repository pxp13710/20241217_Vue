import { name as nick, age, check, arr, user, add } from './A02ExportOne.js'
import * as one from './A02ExportOne.js'
import two, { x, y, newAge } from './A02ExportTwo.js'

// 외부 라이브러리 사용
import $ from 'jquery'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'

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

console.log(dom);
document.getElementById('app').innerHTML = dom;

// jquery
$('#root').html(dom);
