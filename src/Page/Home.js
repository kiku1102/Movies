// import "../../CSS/Home.scss"
import CarouselSlider from "../Components/Conten/CarouselSlider";
import Conten from "../Components/Conten/Conten";
import Movies from "../Components/Conten/Movies";
import TvShow from "../Components/Conten/TvShow";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";

function Home() {
    return(
        <div >
            <Header />
            <CarouselSlider />
            <Conten />
            <Movies />
            <TvShow />
            <Footer />
        </div>
    )
}
export default Home;