import "./App.css";
// index.js 생략해도 해당 디렉토리 가서 찾음 (인덱스 파일명만 알아서 찾음)
import MainPageComponent from "./main/index.js";
import { Switch, Route } from "react-router-dom";
import UploadPage from "./upload";
import ProductPage from "./product";

function App() {
  return (
    <div>
      {/* switch 컴포넌트 안에 route 컴포넌트 */}
      <Switch>
        {/* 라우트는 프롭에 경로 설정 가능 해당 path에 갔을때 자식 컴포넌트를 보여준다 */}
        <Route exact={true} path="/">
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
