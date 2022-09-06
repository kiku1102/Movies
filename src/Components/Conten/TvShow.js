import { useEffect, useState } from "react";
import { Container, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";


function TvShow() {
    // State for data
    const[tvShow, setTvShow] = useState([]);
    // Call API Tv Show
    const getData = async(paramUrl, ParamOptions = {}) =>{
        const response = await fetch(paramUrl, ParamOptions);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() =>{
        getData("https://api.themoviedb.org/3/tv/on_the_air?api_key=67687c1c021fb5d042463da4a1ca5259&page=1")
        .then((data) =>{
            console.log(data.results);
            setTvShow(data.results);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    return(
        <Container>
            <Grid container mt={8} textAlign="center" spacing={2}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Typography variant="h2" style={{ "textDecoration": "none", "color": "#8E3200", "fontWeight": "bold" }} className='fontapp'>
                        Tv Show
                    </Typography>
                </Grid>
                {tvShow.map((tvShows, index) => (
                    <Grid item sm={12} md={6} lg={3}>
                    <Card>
                        <CardActionArea >
                            <CardContent>
                                <img
                                    src={`https://image.tmdb.org/t/p/w300/${tvShows.backdrop_path}`}
                                    alt={tvShows.name}
                                    style={{ width: "100%", height: "200px", objectFit: "contain" }}
                                />
                                <Typography >
                                    {tvShows.name}
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
export default TvShow;