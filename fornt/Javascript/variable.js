let x = 10;
x = 20;
console.log(x); // 20

const pi = 3.14;
// pi = 5; // 에러 발생. 상수는 절대 변경할 수 없음.

// 이미 다른 의미로 결정되어 있는 단어를 변수 이름으로 사용하면 에러 발생.
let let = 100;
const const = 100;
const if = 100; 

/*
변수 선언(이름)의 규칙

1. 변수 이름은 영어 문자와 언더스코어(_), 숫자를 사용함.
   단, 숫자로 시작할 수는 없다. (반드시 문자 즉, 영어로 시작해야 함.)

2. 예약어(let, const 등)는 변수 이름으로 사용할 수 없다.
   예) let, const, if, while 등 너무 많아서 암기 불가. 에러 발생 시 수정!

3. 여러 단어를 연결하여 변수 이름을 만들 때 뒤에 단어는 대문자로 시작하는 것이 좋음.(권고 사항)
   예) userName, studentId, memberAddress 등
    --> camel case(낙타표기법)이라고 함.
    --> ★상식★ snake case: user_name, student_id, member_address 등
    
4. 변수 이름은 의미 있게 작성하는 것을 추천. 단어 하나보다는 두 단어 이상으로 구성하는 것이 효율적.
*/
