function ChildComponent(props) {
  // es6문법인 Desturcturing 사용해서 객체나 배열에 값을 간단하게 가져옴 (name과 age 변수가 생성되가 값이 들어감)
  const { name, age } = props;
  return (
    <div>
      <p>
        이름은 {name}이며 {age}살입니다.
      </p>
    </div>
  );
}

export default ChildComponent;
