// export가 없는 css파일은 from 생략
import "./index.css";
import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

function MainPage() {
  // state 사용위해 products는 배열이라 파라미터로 빈배열을 넣음
  const [products, setProducts] = React.useState([]);
  //   state에서 then에 들어간 setProducts가 호출 될 때 마다 코드가 다시 시작 즉 데이터 통신부터 랜덩링까지 지속적으로 반복된다
  //  한 번만 호출하도록 useEffect 사용
  React.useEffect(function () {
    axios
      .get(
        "https://8580b8ce-a931-470f-a899-f4e0d0090da4.mock.pstmn.io/products"
      )
      .then(function (result) {
        const products = result.data.products;
        setProducts(products);
      })
      .catch(function (error) {
        console.error("에러 발생 :", error);
      });
  }, []);

  // 리액트 기본 규칙 : 복수의 태그는 리턴 불가능 하나의 div로 씌워져서 해결
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          {/* <!-- 이미지는 주로 width와 맞춰 해상도를 정함 --> */}
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {/* 기존에 innerHTML로 했던 걸 리액트에서는 jsx 문법으로*/}
          {products.map(function (product, index) {
            return (
              // 리액트에서는 태그안에 class 대신 className을 넣는다 (jsx 문법 관련?)
              <div className="product-card">
                {/* <Link className="product-link" to={"/products/" + index}> */}
                {/* ES6 문법 Template Literal 활용시 */}
                <Link className="product-link" to={`/products/${index}`}>
                  <div>
                    <img className="product-image" src={product.imageUrl} />
                  </div>
                  <div className="product-contents">
                    <span className="product-name">{product.name}</span>
                    <span className="product-price">{product.price}원</span>
                    <div className="product-seller">
                      <img
                        className="product-avatar"
                        src="images/icons/avatar.png"
                      />
                      <span>{product.seller}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
