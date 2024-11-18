import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Main(props){

    const [formData,setFormData] = useState({cate:"의류",name:"",order:"추천순"})
    const navigate = useNavigate(); // 수동으로 라우팅 처리를 위한 훅
    const changeHandler = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const submit1Handler = () => {
      const queryString = `name=${formData.name}&cate=${formData.cate}&order=${formData.order}`;
  
      // result1 라우팅 요청
      navigate(`/main/result1?${queryString}`);
    };
    const submit2Handler = () => {
        const params = `${formData.name}/${formData.cate}/${formData.order}`;
    
        // result2 라우팅 요청
        navigate(`/main/result2/${params}`);
      };
    
    const submit3Handler = () => {
      // result3 라우팅 요청
      navigate(`/main/result3`, { state: { formData } });
    };
    
 return(
    <>
        <h3>안녕하세요. 메인페이지입니다.</h3>
        <form>
            <select name="cate" value={formData.cate} onChange={changeHandler}>
                <option value={"의류"} selected>의류</option>
                <option value={"가전"}>가전</option>
                <option value={"취미"}>취미</option>
                <option value={"유아동"}>유아동</option>
                <option value={"서적"}>서적</option>
            </select>
            <input type="text" name="name" value={formData.name} onChange={changeHandler} placeholder="상품명"/>
            <select name="order" value={formData.order} onChange={changeHandler}>
                <option value={"추천순"} selected>추천순</option>
                <option value={"높은가격순"}>높은가격순</option>
                <option value={"낮은가격순"}>낮은가격순</option>
                <option value={"할인율높은순"}>할인율높은순</option>
                <option value={"최신등록순"}>최신등록순</option>
            </select>
            <br />
            <input type="button" value="쿼리 스트링 전송" onClick={submit1Handler} />
            <input type="button" value="주소 파라미터 전송" onClick={submit2Handler} />
            <input type="button" value="state 전송" onClick={submit3Handler} />
        </form>

        {/* 자식 라우터를 렌더링 */}
      <Outlet />
    </>
 );
}