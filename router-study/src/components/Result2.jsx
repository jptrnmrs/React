import { useParams } from "react-router-dom";

export default function Result2() {
  // useParams() : 주소 파라미터 처리를 위한 훅
  const { name, cate, order } = useParams();

  return (
    <div className="Result2">
      <span>Result2</span>
      <p>
        {cate} 카테고리에서 {order}으로  '{name}'을 검색한 결과입니다.
      </p>
    </div>
  );
}
