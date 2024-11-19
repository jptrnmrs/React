import useCates from "../../hooks/useCates"
import { Link } from "react-router-dom";

export default function List (){
    const [cate1, cate2] = useCates();
    return(
        <section className="list">
            <nav>
                <h1>글목록</h1>
                <form action="#">
                    <input type="text" name="search" placeholder="제목 키워드, 글쓴이 검색" />
                    <input type="submit" value="검색" />
                </form>
            </nav>
                            
            <table border="0">                    
                <tr>
                    <th>번호</th>
                    <th>제목</th>
                    <th>글쓴이</th>
                    <th>날짜</th>
                    <th>조회</th>
                </tr>                    
                <tr>
                    <td>3</td>
                    <td><Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>{cate2} 게시물입니다.[3]</Link></td>
                    <td>길동이</td>
                    <td>20-05-12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td><Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>{cate2} 게시물입니다.[3]</Link></td>
                    <td>길동이</td>
                    <td>20-05-12</td>
                    <td>12</td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><Link to={`/board/view?cate1=${cate1}&cate2=${cate2}`}>{cate2} 게시물입니다.[3]</Link></td>
                    <td>길동이</td>
                    <td>20-05-12</td>
                    <td>12</td>
                </tr>
            </table>

            <div className="page">
                <Link to="#" className="prev">이전</Link>
                <Link to="#" className="num current">1</Link>
                <Link to="#" className="num">2</Link>
                <Link to="#" className="num">3</Link>
                <Link to="#" className="next">다음</Link>
            </div>

            <Link to={`/board/write?cate1=${cate1}&cate2=${cate2}`} className="btn btnWrite">글쓰기</Link>                        
        </section>
    )
}