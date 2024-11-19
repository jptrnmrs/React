import DefaultLayout from "../../layouts/DefaultLayout";
import {Link} from 'react-router-dom';
import SubLayout from "../../layouts/SubLayout";

export default function ListPage(){
    return (
    <DefaultLayout>
        <SubLayout>
            <p className="sort">
                <Link to="#" className="on">전체(10) |</Link>
                <Link to="#">과일 |</Link>
                <Link to="#">야채 |</Link>
                <Link to="#">곡류</Link>
            </p>
            <table border="0">
                <thead>
                    <tr>
                        <th>이미지</th>
                        <th>종류</th>
                        <th>상품명</th>
                        <th>할인</th>
                        <th>포인트</th>
                        <th>판매가격</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <Link to="/market/view"><img src="../images/market_item1.jpg" className="thumbnail" alt="사과 500g"/></Link>
                        </td>
                        <td className="type">과일</td>
                        <td className="title"><Link to="#">사과 500g</Link></td>
                        <td className="discount">10%</td>
                        <td className="point">400P</td>
                        <td className="price">
                            <strong>3,600</strong>
                            <del>4,000</del>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/market/view"><img src="../images/market_item2.jpg" className="thumbnail" alt="사과 500g"/></Link>
                        </td>
                        <td className="type">과일</td>
                        <td className="title"><Link to="#">전남 완주 배 5kg</Link></td>
                        <td className="discount">10%</td>
                        <td className="point">400P</td>
                        <td className="price">
                            <strong>3,600</strong>
                            <del>4,000</del>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/market/view"><img src="../images/market_item3.jpg" className="thumbnail" alt="사과 500g"/></Link>
                        </td>
                        <td className="type">과일</td>
                        <td className="title"><Link to="#">방울 토마토</Link></td>
                        <td className="discount">10%</td>
                        <td className="point">400P</td>
                        <td className="price">
                            <strong>3,600</strong>
                            <del>4,000</del>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/market/view"><img src="../images/market_item6.jpg" className="thumbnail" alt="사과 500g"/></Link>
                        </td>
                        <td className="type">곡류</td>
                        <td className="title"><Link to="#">무농약 현미</Link></td>
                        <td className="discount">10%</td>
                        <td className="point">400P</td>
                        <td className="price">
                            <strong>3,600</strong>
                            <del>4,000</del>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/market/view"><img src="../images/market_item7.jpg" className="thumbnail" alt="사과 500g"/></Link>
                        </td>
                        <td className="type">야채</td>
                        <td className="title"><Link to="#">팜스토리 하루야채 샐러드</Link></td>
                        <td className="discount">10%</td>
                        <td className="point">400P</td>
                        <td className="price">
                            <strong>3,600</strong>
                            <del>4,000</del>
                        </td>
                    </tr>
                    
                </tbody>
            </table>

            <p className="paging">
                <Link to="#">&lt;</Link>
                <Link to="#" className="on">[1]</Link>
                <Link to="#">[2]</Link>
                <Link to="#">[3]</Link>
                <Link to="#">[4]</Link>
                <Link to="#">[5]</Link>
                <Link to="#">&gt;</Link>
            </p>
        </SubLayout>
    </DefaultLayout>
    );
}