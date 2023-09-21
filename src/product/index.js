import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  // productPage()를 호출하는 Route의 경로에 넣은 파라미터를 받아옴 (:id)
  // id만 필요해서 파라미터 전체를 받지 않고 Es6 문법 디스트럭처링 사용
  const { id } = useParams();
  // 딱 한 번만 불리게 useEffect사용 (랜더링 시마다 네트워크 요청을 막음)
  // product에는 처음에는 null이 들어감
  // 비동기 통신이므로 리턴 구문이 처음에 동작할때는 product가 null임
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      // express 서버 주소로 변경
      .get(`http://localhost:8080/products/${id}`)
      .then(function (result) {
        // express 서버에서는 product 객체에 담아서 결과를 넘겨줬기 때문에 data안에 product 객체를 찾아야 한다
        setProducts(result.data.product);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(product);

  // 비동기 통신으로인해 null인 경우 에러가 발생하므로 방어구문
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        {/* 경로의 맨 앞 /는 현재 프로젝트 기준이라는 의미 (절대경로)*/}
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2023년 9월 19일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
