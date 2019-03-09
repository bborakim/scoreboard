/*
var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50]; //...은 나머지 연산자임.
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]*/

// Stage 4(finished) proposal
/*
var a, b, rest;

({ a, b } = { a: 10, b: 20 }); // JSON 객체를 리턴하고 싶을때는 ()안에 넣어줌
console.log(a); // 10
console.log(b); // 20


({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}*/

//es6에서 새로 도입된 디폴트 값 설정
var a, b;

[a=5, b=7] = [1]; // 두번째 값이 없을 경우 원래는 undefine가 되야하는데 디폴트 설정을 해주었기때문에 7이됨.
console.log(a); // 1
console.log(b); // 7