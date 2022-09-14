import { useEffect, useState } from "react";

function Movies() {
    const[movie, setMovie] = useState ([]);
    // Call API
    const getData = async (paramUrl, ParamOptions = {}) => {
        const response = await fetch(paramUrl, ParamOptions);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() => {
        getData("https://api.themoviedb.org/3/discover/movie?api_key=67687c1c021fb5d042463da4a1ca5259&page=1&language=en-US&sort_by=popularity.desc&with_genres=")
    })
    return(
        <div>

        </div>
    )
}
export default Movies;