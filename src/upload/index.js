import { Button, Divider, Form, Input, InputNumber } from "antd";
import "./index.css";

// index는 해당 파일에서 시작이되는 지점이라는 의미
function UploadPage() {
  // 람다 방식으로 함수 정의 (익명함수 방식과 동일)
  const onSubmit = (values) => {
    // 최종적으로 해당 데이터가 서버로 가야함 (현재는 임시)
    console.log(values);
  };
  return (
    <div id="upload-container">
      <Form name="상품 업로드" onFinish={onSubmit}>
        <Form.Item
          name="upload"
          label={<div className="upload-label">상품 사진</div>}
        >
          {/* 서버 개발 전까지는 임시로 */}
          <div id="upload-img-placeholder">
            <img src="/images/icons/camera.png" />
            <span>이미지를 업로드해주세요.</span>
          </div>
        </Form.Item>
        {/* 선을 그어줌 (영역을 나눠줌) */}
        <Divider />
        {/* 해당 인풋에대한 설명이 라벨이라는 프롭 (안에대 태그를 넣음) */}
        {/* rules 프롭은 인자가 배열 (required: true 는 인풋 입력이 필수인지 설정/ 메세지는 입력이 안됐을때 나옴) */}
        <Form.Item
          label={<div className="upload-label">판매자 명</div>}
          name="seller"
          rules={[{ required: true, message: "판매자 이름을 입력해주세요" }]}
        >
          {/* Input 컴포넌트의 placeholder 프롭은 값을 입력하지 않을때 뜨는 내용 */}
          <Input
            className="upload-name"
            size="large"
            placeholder="이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="name"
          label={<div className="upload-label">상품 이름</div>}
          rules={[{ required: true, message: "상품 이름을 입력해주세요" }]}
        >
          <Input
            className="upload-name"
            size="large"
            placeholder="상품 이름을 입력해주세요."
          />
        </Form.Item>
        <Divider />
        <Form.Item
          name="price"
          label={<div className="upload-label">상품 가격</div>}
          rules={[{ required: true, message: "상품 가격을 입력해주세요" }]}
        >
          {/* 숫자형 입력이라 inputNumber */}
          <InputNumber className="upload-price" defaultValue={0} size="large" />
        </Form.Item>
        <Divider />
        <Form.Item
          name="description"
          label={<div className="upload-label">상품 소개</div>}
          rules={[{ required: true, message: "상품 소개를 입력해주세요" }]}
        >
          {/* 상세명세는 textArea */}
          {/* showCount에 배정문 생략되었지만 true 입력됨 (리액트 특징 생략형으로 제공) */}
          <Input.TextArea
            size="large"
            id="product-description"
            showCount
            maxLength={300}
            placeholder="상품 소개를 적어주세요."
          />
        </Form.Item>
        <Form.Item>
          {/* Button 의 프롭 htmlType 을 설정해줘야함 */}
          <Button id="submit-button" size="large" htmlType="submit">
            문제 등록하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default UploadPage;
