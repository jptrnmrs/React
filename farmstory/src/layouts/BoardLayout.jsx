import Aside from "../components/common/Aside";
import useCates from "../hooks/useCates";
import Nav from "../components/common/Nav";

export default function SubLayout({ children }) {
  const [cate1, cate2] = useCates();

  return (
    <div id="sub">
      <div>
        {cate1 === "croptalk"       && (<img src="../images/sub_top_tit3.png" alt="CROPTALK"        />)}
        {cate1 === "event"          && (<img src="../images/sub_top_tit4.png" alt="EVENT"           />)}
        {cate1 === "community"      && (<img src="../images/sub_top_tit5.png" alt="COMMUNITY"       /> )}
      </div>
      <section className={cate1}>
        <Aside />
        <article id="board">
          <Nav />
          {children}
        </article>
      </section>
    </div>
  );
}