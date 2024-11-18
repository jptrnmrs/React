import { useLocation } from "react-router-dom";

export default function Result3() {
  // useLocation() : 현재 경로 정보를 가져오는 훅
  const location = useLocation();

  const data = location.state && location.state.formData;

  return (
    <div className="Result3">
      <span>Result3</span>
      <p>
        {data.cate} 카테고리에서 {data.order}으로  '{data.name}'을 검색한 결과입니다.
      </p>
    </div>
  );
}
