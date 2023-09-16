// 리액트가 시작할 때 제일 먼저 실행되는 파일
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* 브라우저 라우터가 app을 감싸고 있어야 그 안에서 자식들이 자유롭게 페이지 이동이 가능 */}
    {/* 리액트돔에 브라우저 라우터를 Wraping 해줌 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
