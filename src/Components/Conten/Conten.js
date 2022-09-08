import CarouselSlider from "./CarouselSlider";
import Movies from "./Movies";
import Trending from "./Trending";
import TvShow from "./TvShow";
import "../../CSS/Home.scss"

function Conten() {
    



    

    return (
      <div className="back-groud">
        <CarouselSlider className="w-100"/>
        <Movies />
        <TvShow />
        <Trending />
      </div>  
    )
}
export default Conten;