import Aside from "../components/common/Aside";
import useCates from "../hooks/useCates";
import Nav from "../components/common/Nav";

export default function SubLayout({ children }) {
  const [cate1, cate2] = useCates();

  return (
    <div id="sub">
      <div>
        {cate1 === "introduction"   && (<img src="../images/sub_top_tit1.png" alt="INTRODUCTION"    />)}
        {cate1 === "market"         && (<img src="../images/sub_top_tit2.png" alt="MARKET"          />)}
    </div>
      <section className={cate1}>
        <Aside />
        <article className={cate2}>
          <Nav />
          {children}
        </article>
      </section>
    </div>
  );
}