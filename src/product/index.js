import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
import { API_URL } from "../config/constants";
import dayjs from "dayjs";
import { Button, message } from "antd";

function ProductPage() {
  // productPage()를 호출하는 Route의 경로에 넣은 파라미터를 받아옴 (:id)
  // id만 필요해서 파라미터 전체를 받지 않고 Es6 문법 디스트럭처링 사용
  const { id } = useParams();
  // 딱 한 번만 불리게 useEffect사용 (랜더링 시마다 네트워크 요청을 막음)
  // product에는 처음에는 null이 들어감
  // 비동기 통신이므로 리턴 구문이 처음에 동작할때는 product가 null임
  const [product, setProducts] = useState(null);

  // 함수로 대체해서 useEffect 내에서 사용
  // 구매후 상품정보 다시 불러오기 위해 함수화
  const getProdcut = () => {
    axios
      // express 서버 주소로 변경
      .get(`${API_URL}/products/${id}`)
      .then(function (result) {
        // express 서버에서는 product 객체에 담아서 결과를 넘겨줬기 때문에 data안에 product 객체를 찾아야 한다
        setProducts(result.data.product);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(function () {
    getProdcut();
  }, []);
  console.log(product);

  // 비동기 통신으로인해 null인 경우 에러가 발생하므로 방어구문
  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  // 구매 버튼 클릭시 동작
  const onClickPurchase = () => {
    axios
      .post(`${API_URL}/purchase/${id}`)
      .then((result) => {
        message.info("구매가 완료되었습니다");
        // 상품 정보 다시 불러옴
        getProdcut();
      })
      .catch((error) => {
        message.error(`에러가 발생했습니다. ${error.message}`);
      });
  };

  return (
    <div>
      <div id="image-box">
        {/* 경로의 맨 앞 /는 현재 프로젝트 기준이라는 의미 (절대경로)*/}
        <img src={`${API_URL}/${product.imageUrl}`} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        {/* 날짜를 원하는 형식으로 보여주기 위해 dayjs API 사용 */}
        <div id="createdAt">
          {dayjs(product.createdAt).format("YYYY년 MM월 DD일")}
        </div>
        <div>
          <Button
            id="purchase-button"
            size="large"
            type="primary"
            danger="true"
            onClick={onClickPurchase}
            // 구매가 완료되면 구매 못하도록 막아야 한다
            disabled={product.soldout === 1}
          >
            재빨리 구매하기
          </Button>
          {/* div 태크 안에 줄바꿈 텍스트가 들어가도 줄바꿈이 되지 않음 */}
          {/* <pre> 태그는 줄바꿈 그대로 보여주는 역할 */}
          <pre id="description">{product.description}</pre>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
