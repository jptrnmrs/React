import useCates from "../../hooks/useCates";

export default function Nav() {
  const [cate1, cate2] = useCates();

  return (
    <nav>
      {cate1 === "introduction" && (
        <>
          {cate2 === "hello" && (
            <>
              <img src="/images/sub_nav_tit_cate1_tit1.png" alt="인사말" />
              <p>
                HOME &gt; 팜스토리소개 &gt; <em>인사말</em>
              </p>
            </>
          )}
          {cate2 === "direction" && (
            <>
              <img src="/images/sub_nav_tit_cate1_tit2.png" alt="찾아오시는길" />
              <p>
                HOME &gt; 팜스토리소개 &gt; <em>찾아오시는길</em>
              </p>
            </>
          )}
        </>
      )}
       {cate1 == "market" && cate2 == "list" && (
            <>
                <img src="/images/sub_nav_tit_cate2_tit1.png" alt="장보기" />
                <p>
                    HOME &gt; 장보기 &gt; <em>상품목록</em>
                </p>
            </>
      )}
      {cate1 == "croptalk" && (
        <>
            {cate2 == "story" && (
                <>
                <img src="/images/sub_nav_tit_cate3_tit1.png" alt="농작물이야기" />
                <p>
                    HOME &gt; 농작물이야기 &gt; <em>농작물이야기</em>
                </p>
                </>
            )}
            {cate2 == "grow" && (
                <>
                <img src="/images/sub_nav_tit_cate3_tit2.png" alt="텃밭가꾸기" />
                <p>
                    HOME &gt; 농작물이야기 &gt; <em>텃밭가꾸기</em>
                </p>
                </>
            )}
            {cate2 == "school" && (
                <>
                <img src="/images/sub_nav_tit_cate3_tit3.png" alt="귀농학교" />
                <p>
                    HOME &gt; 농작물이야기 &gt; <em>귀농학교</em>
                </p>
                </>
            )}
        </>
      )}
      {cate1 == "event" && cate2 == "info" && (
        <>
          <img src="/images/sub_nav_tit_cate4_tit1.png" alt="이벤트" />
          <p>
            HOME &gt; 이벤트 &gt; <em>이벤트정보</em>
          </p>
        </>
      )}
      {cate1 == "community" && (
        <>
            {cate2 == "notice" && (
                <>
                    <img src="/images/sub_nav_tit_cate5_tit1.png" alt="공지사항" />
                    <p>
                        HOME &gt; 커뮤니티 &gt; <em>공지사항</em>
                    </p>
                </>
            )}
            {cate2 == "menu" && (
                <>
                    <img src="/images/sub_nav_tit_cate5_tit2.png" alt="오늘의식단" />
                    <p>
                        HOME &gt; 커뮤니티 &gt; <em>오늘의식단</em>
                    </p>
                </>
            )}
            {cate2 == "chef" && (
                <>
                    <img src="/images/sub_nav_tit_cate5_tit3.png" alt="나도요리사" />
                    <p>
                        HOME &gt; 커뮤니티 &gt; <em>나도요리사</em>
                    </p>
                </>
            )}
            {cate2 == "qna" && (
                <>
                    <img src="/images/sub_nav_tit_cate5_tit4.png" alt="문의하기" />
                    <p>
                        HOME &gt; 커뮤니티 &gt; <em>문의하기</em>
                    </p>
                </>
            )}
            {cate2 == "faq" && (
                <>
                    <img src="/images/sub_nav_tit_cate5_tit5.png" alt="자주묻는질문" />
                    <p>
                        HOME &gt; 커뮤니티 &gt; <em>자주묻는질문</em>
                    </p>
                </>
            )}
        </>
      )}
    </nav>
  );
}
