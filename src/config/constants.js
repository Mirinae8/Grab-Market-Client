// 상수 선언용 파일
// 실제 돌아가고 있는 서버로 변경 (fly.io에 올린 서버)
// 삼항연산자로 실제 서버가 돌아가지 않으면 로컬과 연결하도록
// process.env.NODE_ENV 는 내부에서 돌릴때는 "develpoment가 들어감" 클라우드면 "production"
export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://grab-market-server-gdjw.fly.dev"
    : "http://localhost:8080";
