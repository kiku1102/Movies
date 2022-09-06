import { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";

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
                setMovie(data.results)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <Grid container mt={8} textAlign="center" spacing={2}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Typography variant="h2" style={{ "textDecoration": "none", "color": "#8E3200", "fontWeight": "bold" }} className='fontapp'>
                        Movies
                    </Typography>
                </Grid>
                {movie.map((movies, index) => (
                    <Grid item sm={12} md={6} lg={3}>
                        <Card>
                            <CardActionArea >
                                <CardContent>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300/${movies.backdrop_path}`}
                                        alt={movies.title}
                                        style={{ width: "100%", height: "200px", objectFit: "contain" }}
                                    />
                                    <Typography >
                                        {movies.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}
export default Movies;