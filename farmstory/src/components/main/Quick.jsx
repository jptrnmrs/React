import Link from 'react-router-dom';
export default function Quick(){
    return(
      <>
        <div className="quick">
                <Link to="#"><img src="./images/main_banner_sub1_tit.png" alt="오늘의 식단" /></Link>
                <Link to="#"><img src="./images/main_banner_sub2_tit.png" alt="나도 요리사"  /></Link>                
            </div> 
      </>
    );
}