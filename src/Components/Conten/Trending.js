import { Container, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import { useEffect, useState } from "react";

function Trending() {

    // State for data
    const [trending, setTrending] = useState([]);
    // Call API tv Show
    const getData = async (paramUrl, ParamOption = {}) => {
        const response = await fetch(paramUrl, ParamOption);
        const responseData = await response.json();
        return responseData;
    };
    useEffect(() => {
        getData("https://api.themoviedb.org/3/trending/all/day?api_key=67687c1c021fb5d042463da4a1ca5259")

            .then((data) => {
                console.log(data.results);   
                const allData = data.results;
                const filter = allData.slice(0, 7);
                setTrending(filter);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <Container>
            <Grid container mt={8} textAlign="center" spacing={2}>
                <Grid item xs={12} md={12} sm={12} lg={12}>
                    <Typography variant="h2" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold" }} className='fontapp'>
                        Trending
                    </Typography>
                </Grid>
                {trending.map((trending, index) => (
                    <Grid item sm={12} md={6} lg={3}>
                        <Card>
                            <CardActionArea >
                                <CardContent>
                                    <img
                                        src={`https://image.tmdb.org/t/p/w300/${trending.backdrop_path}`}
                                        alt={trending.title || trending.name}
                                        style={{ width: "100%", height: "200px", objectFit: "contain" }}
                                    />
                                    <Typography >
                                        {trending.title || trending.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Trending;