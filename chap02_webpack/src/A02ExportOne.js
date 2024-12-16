export const name = '놀부';
export const age = 30;
export const check = true;

const arr = [10, 20];
const user = { name: '흥부', age: 20 };
const onAdd = (x, y) => `${x} + ${y} = ${x + y}`;

// 일괄로 묶어서 export. 이 경우는 이름 변경 가능
export { arr, user, onAdd as add };

// 이 파일에서 실행도 가능
console.log(`A02Export => ${name} / ${age}`);
