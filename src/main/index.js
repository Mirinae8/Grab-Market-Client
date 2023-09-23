// export가 없는 css파일은 from 생략
import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { API_URL } from "../config/constants";
import { Carousel } from "antd";

// 기능 확장
dayjs.extend(relativeTime);

function MainPage() {
  // state 사용위해 products는 배열이라 파라미터로 빈배열을 넣음
  const [products, setProducts] = React.useState([]);
  const [banners, setBanners] = React.useState([]);
  //   state에서 then에 들어간 setProducts가 호출 될 때 마다 코드가 다시 시작 즉 데이터 통신부터 랜덩링까지 지속적으로 반복된다
  //  한 번만 호출하도록 useEffect 사용
  React.useEffect(function () {
    axios
      .get(
        // 기존 postman 의 mock서버
        // "https://8580b8ce-a931-470f-a899-f4e0d0090da4.mock.pstmn.io/products"
        // express 서버에서 만든 json으로 변경
        `${API_URL}/products`
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 :", error);
      });

    // 한 번만 실행되므로 배너 불러오는것도 여기서
    axios
      .get(`${API_URL}/banners`)
      .then((result) => {
        const banners = result.data.banners;
        setBanners(banners);
      })
      .catch((error) => {
        // 개발자 도구로만 볼 수 있으므로 사용자들에게 인지시키기 위해 여러 방법 사용 가능 (팝업 메시지 등)
        console.error("에러 발생: ", error);
      });
  }, []);

  // 리액트 기본 규칙 : 복수의 태그는 리턴 불가능 하나의 div로 씌워져서 해결
  return (
    <div>
      {/* 이미지가 슬라이드 되도록 하는 컴포넌트 유형을 캐러셀이라고 한다 */}
      {/* autoplay 는 자동 넘김 프롭  "=" 명시 없으면 기본 true*/}
      <Carousel autoplay autoplaySpeed={3000}>
        {banners.map((banners, index) => {
          return (
            // 배너 클릭시 이동위해 링크 컴포넌트 추가
            <Link to={banners.href}>
              <div id="banner">
                <img src={`${API_URL}/${banners.imageUrl}`} />
              </div>
            </Link>
          );
        })}
        {/* <div id="banner"> */}
        {/* <!-- 이미지는 주로 width와 맞춰 해상도를 정함 --> */}
        {/* <img src="images/banners/banner1.png" /> */}
        {/* </div> */}
      </Carousel>
      <h1 id="product-headline">판매되는 상품들</h1>
      <div id="product-list">
        {/* 기존에 innerHTML로 했던 걸 리액트에서는 jsx 문법으로*/}
        {products.map(function (product, index) {
          return (
            // 리액트에서는 태그안에 class 대신 className을 넣는다 (jsx 문법 관련?)
            <div className="product-card">
              {
                // 판매된 상품 흐리게 처리
                // and 조건이라 앞이 트루면 뒤쪽이 동작
                product.soldout === 1 && <div className="product-blur" />
              }
              {/* <Link className="product-link" to={"/products/" + index}> */}
              {/* ES6 문법 Template Literal 활용시 */}
              <Link className="product-link" to={`/products/${product.id}`}>
                <div>
                  <img
                    className="product-image"
                    src={`${API_URL}/${product.imageUrl}`}
                  />
                </div>
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-footer">
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                    {/* 업로드 날짜를 보기 편하게 하기 위해 */}
                    <span className="prodcut-date">
                      {dayjs(product.createdAt).fromNow()}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
