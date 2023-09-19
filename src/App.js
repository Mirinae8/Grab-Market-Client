import "./App.css";
// index.js 생략해도 해당 디렉토리 가서 찾음 (인덱스 파일명만 알아서 찾음)
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

function App() {
  // useHistory
  const history = useHistory();
  return (
    <div>
      {/* 헤더와 푸터가 기존에는 MainPageComponent 에 있었지만 다른 페이지에서도 필요하므로 여기로 옮김 */}
      <div id="header">
        <div id="header-area">
          {/* /는 기본 경로를 의미한다 */}
          <Link to="/">
            {/* 앞에 /를 넣어 절대경로로 변경 (기존에는 상대경로라 다른 페이지에서 새로고침시 불러오지 못함)*/}
            <img src="/images/icons/logo.png" />
          </Link>
          {/* antd api에서 제공해주는 컴포넌트를 사용 (사이트에서 골라서 복붙) */}
          <Button
            size="large"
            onClick={function () {
              // alert("업로드 클릭");
              // 다른 경로로 이동할 때 사용
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        {/* switch 컴포넌트 안에 route 컴포넌트 */}
        <Switch>
          {/* 라우트는 프롭에 경로 설정 가능 해당 path에 갔을때 자식 컴포넌트를 보여준다 */}
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          {/* :id를 productPage에서 받을 수 있음 파라미터로 넣어줌 */}
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
