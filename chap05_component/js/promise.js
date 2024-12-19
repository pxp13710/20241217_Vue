/* eslint-disable no-unused-vars */
console.log('------ 프로그램 시작 -----');

const one = (ms, callback) => {
  console.log('------ START -----');
  // 실행
  setTimeout(() => {
    const result = 2000;
    console.log(`ONE Result=> ${result}`);

    setTimeout(() => {
      const value = result + 2000;
      console.log(value);
    }, 2000)

    callback(result);
    // return result;
  }, ms)
  console.log('------ END -----');
}

const inner = (x) => {
  console.log('Hello World', x);
}
// one(2000, inner);


const two = (ms) => {
  // resolve => then이 전달한 함수
  // reject => catch가 전달한 함수
  const promise = new Promise((resolve, reject) => {
    if (ms < 1000) reject(new Error('시간이 너무 짧습니다'));
    setTimeout(() => {
      const result = 3000;
      resolve({ result, states: 200, statusText: 'OK' })
    }, ms)
  });
  return promise
}

/*
two(2000)
  .then((resp) => {
    console.log('성공 1=> ', resp.result);

    // return에 관련된 처리 작업은 다음 then이 잡아 처리한다
    return two(resp.result);
  })
  .then((resp) => {
    console.log('성공 2=> ', resp.result);

    return resp.result + 10000;
  })
  .then((resp) => {
    console.log('성공 3=> ', resp);
  })

  .catch((error) => {
    console.error('실패=> ', error);
  })
*/

// ES2017 async ~ await => 함수기반으로 정의한다
const getResult = async () => {
  try {
    const resp1 = await two(2000);
    // const data = await resp1.json();   // fetch의 경우
    console.log(resp1);
    const resp2 = await two(resp1.result);
    console.log(resp2);
    const resp3 = resp2.result + 10000;
    console.log(resp3);
  } catch (err) {
    console.error(err);
  }
}
getResult();


console.log('------ 프로그램 종료 -----');