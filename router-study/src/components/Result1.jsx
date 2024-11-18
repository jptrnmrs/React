import { useSearchParams } from "react-router-dom";

export default function Result1() {
  // 쿼리 스트링 라우팅 데이터 처리를 위한 훅
  const [searchParms] = useSearchParams();

  // 쿼리 파라미터 수신
  const name = searchParms.get("name");
  const cate = searchParms.get("cate");
  const order = searchParms.get("order");

  return (
    <div className="Result1">
      <span>Result1</span>
      <p>
        {cate} 카테고리에서 {order}으로  '{name}'을 검색한 결과입니다.
      </p>
    </div>
  );
}
