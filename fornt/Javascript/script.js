let heading = document.querySelector("#heading"); // #은 heading을 선택하겠다는 의미
heading.onclick = function () {
  heading.style.color = "red";
};

// 위의 식은 사실 아래의 식을 함축한 것과 같음.
// document.querySelector("#heading").onclick = function () {
//   document.querySelector("#heading").style.color = "red";
// };

// alert("오늘은 자바스크립트 첫 날"); <--경고창
// confirm("확인 좀 하자"); <--확인창
document.write("<h1>어서 오세요</h1>");

let userName = prompt("이름을 입력하세요.", "아무개"); /* <--입력창 */
console.log(
  userName + "님, 환영합니다."
); /* 콘솔창에 보이는 역할. 콘솔창은 개발자 도구 콘솔탭에서 확인 가능. */

// console.log('I(백슬래쉬 필수)'m stugying Javascript');
