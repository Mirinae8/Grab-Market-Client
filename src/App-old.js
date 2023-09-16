// 리액트 처음 배울때 작성 코드 (그랩마켓 개발위해 미사용)
import logo from "./logo.svg";
import "./App.css";
import ChildComponent from "./child.js";
// .js를 지워도 인지 가능
import TimerComponent from "./timer";

function App() {
  const text = "화이팅!";
  function sayHello() {
    return <h3>리액트 조아</h3>;
  }
  const sayHello2 = function () {
    alert("안녕하세요");
  };
  return (
    <div>
      <h1>안녕하세요!</h1>
      <h2>{text}</h2>
      {sayHello()}
      {/* html에 없지만 리액트에서 onClick이라는 속성을 태그마다 부여해줌 */}
      <div onClick={sayHello2}>클릭해주세요</div>
      {/* 리액트에서 컴포넌트를 만들 때 쓰는 jsx 문법, 숫자는 {]로 표현해야함, 태그에 속성을 넣듯이 컴포넌트에 인자 제공 */}
      <TimerComponent />
      <ChildComponent name="그랩" age={27} />
      <ChildComponent name="민수" age={25} />
      <ChildComponent name="철수" age={30} />
      <ChildComponent name="슬기" age={28} />
    </div>
  );
}

export default App;
