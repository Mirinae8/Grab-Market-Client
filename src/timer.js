import React from "react";

function TimerComponent() {
  //   time은 처음에 0으로 시작
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이트");
  // return 값에 onClick 옵션을 없애면 무한 반복해 너무 많이 랜더링 되는 오류가 발생한다
  // function updateTime() {
  //   setTime(time + 1);
  // }
  // useEffect를 쓰면 두번째 인자의 변수가 변경될때마다 첫 번째 인자인 함수가 실행됨, 없으면 한 번만
  React.useEffect(function () {
    setTime(time + 1);
  }, []);

  return (
    <div>
      <h3>{time}초</h3>
      {/* <button onClick={updateTime}>1씩 올려주세요</button> */}
      <button>1씩 올려주세요</button>
    </div>
  );
}

export default TimerComponent;
