import { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import "../../CSS/List-contens.scss";
import { Link } from "react-router-dom";
const Movies = () => {

    // State for Movies
    const [movie, setMovie] = useState([])

    // Call API Movies
    const getMove = async (paramUrl, paramOptions = {}) => {
        const response = await fetch(paramUrl, paramOptions);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() => {
        getMove("https://api.themoviedb.org/3/movie/top_rated?api_key=67687c1c021fb5d042463da4a1ca5259&page=1")
            .then((data) => {
                console.log(data.results);
                const allData = data.results;
                const filter = allData.slice(0, 8);
                setMovie(filter)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <Grid container mt={8} textAlign="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "textAlign": "left" }}>
                        Movies On Air ⮞
                    </Typography>
                </Grid>
                {movie.map((movies, index) => (
                    <Grid item sm={12} md={6} lg={3} >
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${movies.poster_path}`}
                            alt={movies.title}
                            style={{ width: "50%", }}
                        />
                        {/* <Typography >
                            {movies.title}
                        </Typography> */}
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" >
                <Link to="#" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "textAlign": "left" }}>View more »</Link>
            </Typography>
        </Container>
    )
}
export default Movies;