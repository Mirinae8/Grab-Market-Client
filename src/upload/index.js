import { Divider, Form, Input } from "antd";
import "./index.css";

// index는 해당 파일에서 시작이되는 지점이라는 의미
function UploadPage() {
  // 람다 방식으로 함수 정의 (익명함수 방식과 동일)
  const onSubmit = (values) => {
    // 최종적으로 해당 데이터가 서버로 가야함 (현재는 임시)
    console.log(values);
  };
  return (
    <div>
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item name="upload">
          {/* 서버 개발 전까지는 임시로 */}
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        {/* 선을 그어줌 (영역을 나눠줌) */}
        <Divider />
        <Form.Item>
          {/* Input 컴포넌트의 placeholder 프롭은 값을 입력하지 않을때 뜨는 내용 */}
          <Input size="large" placeholder="이름을 입력해주세요." />
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
