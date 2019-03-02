let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
let copyBook = book;
copyBook.price = 20000;
//console.log(book);
//console.log(copyBook);
//primative type(값이 담겨있음) , reference type( 메모리 주소가 담겨있음) 으로 나뉜다.
// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
// 2-1 Object.assign() 사용하여 deep copy하기
var es5Copy = Object.assign({}, book, {a:1}, {title:"오버라이딩되어 첫번째 값이 바뀜"});
es5Copy.price = 30000;
console.log(book);
console.log(es5Copy);
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
var es6Copy= {...book, ...{a:1}}; // 새로운 메모리 객체가 됨
es6Copy.price= 10000;
console.log(book);
console.log(es6Copy);


