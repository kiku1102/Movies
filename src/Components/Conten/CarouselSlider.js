import { UncontrolledCarousel } from "reactstrap";
import { useEffect, useState } from "react";


function CarouselSlider() {

    const [img, setImg] = useState()

    // Call API Slide
    const getData = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() => {
        getData("https://api.themoviedb.org/3/movie/now_playing?api_key=284324d34929646388e9917f8c8608b0&page=1")
            .then((data) => {
                console.log(data.results);
                setImg(data.results.map(item =>(
                    {
                        // altText: item.overview,
                        caption: item.title,
                        key: 1,
                        src: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${item.backdrop_path}`
                    }
                )))
                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);




    return (
        <UncontrolledCarousel
        interval={2000}
        autoPlay
        items={
                img ? img : []
            }
        />
    )
}
export default CarouselSlider;