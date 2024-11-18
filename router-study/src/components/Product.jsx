import { useParams } from "react-router-dom";

export default function Product(props){
    const {productId} = useParams();
 return(
    <>
        <h3>{productId}번 상품페이지입니다.</h3>
    </>
 );
}