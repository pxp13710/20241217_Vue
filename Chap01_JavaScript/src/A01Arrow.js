// 함수 리터럴. 함수 표현식
const onAdd = function (x = 0, y = 0) {
  console.log(`${x} + ${y} = ${x + y}`);
};

const onMin = function (x, y) {
  return `${x} - ${y} = ${x - y}`;
};

onAdd();
onAdd(10, 20);
console.log(onMin(10, 20));
console.log('');

// ES2015
// 함수 리터럴 방식만 변경 가능
// function을 삭제하고 인수 뒤를 =>로 변경 () => {} 형태가 된다
const one = (x, y) => {
  console.log(`${x} + ${y} = ${x + y}`);
};

const two = (x, y) => {
  return `${x} - ${y} = ${x - y}`;
};

one(20, 20);
console.log(two(20, 20));
console.log('');

// Arrow 함수 {} 내부에 구문 1개만 존재하는 경우 { }와 return을 생략하고
// 한 줄에 기술할 수 있다
// => 뒤가 문이면 실행, => 뒤가 값이면 return 값으로 취급한다
const three = (x, y) => console.log(`${x} + ${y} = ${x + y}`);
const four = (x, y) => `${x} - ${y} = ${x - y}`;
three(30, 20);
console.log(four(30, 20));
console.log('');

// 인수가 1개인 경우는 ()를 생략할 수 있다
// ** ES2017? 에서 추가. 자승 2 ** 3 => 2 * 2 * 2 => Math.pow(2, 3)
const five = x => 2 ** x;             // const five = (x) => 2 ** x;
console.log('2 ** 3=> ', five(3));
console.log('');

// ESNext. 함수의 매개변수에 기본값 할당 가능
const six = (x = 0, y = 0) => console.log(`${x} + ${y} = ${x + y}`);
six();
six(40, 30);
console.log('');


// ** Arrow 함수는 this가 없음. 
// 자신이 포함된 객체의 this를 자신의 this로 사용
const user = {
  name: 'Object',
  age: 10,
  info() {
    console.log(`${this.name} / ${this.age}`);

    const inner = function () {
      console.log(this);              // window
      console.log('Good Morning', this.age);
    }

    const innerTwo = () => {
      console.log(this);              // info가 사용하는 this
      console.log('Good Morning', this.age);
    }

    inner();
    innerTwo();
  },
};
user.info();
console.log('');

const arr = [10, 11, 100, 101, 1000];

let total = 0;
arr.forEach(function (item, i) {
  total += item;
})
console.log(total);

total = 0;
arr.forEach(item => total += item);
console.log(total);
