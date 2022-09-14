import { Container, Grid, Typography, Card, CardActionArea, CardContent } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                const filter = allData.slice(0, 8);
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
                    <Typography variant="h6" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "textAlign": "left" }}>
                        TOP RATED  ⮞
                    </Typography>
                </Grid>
                {trending.map((trending, index) => (
                    <Grid item sm={12} md={6} lg={3}>
                        <img
                            src={`https://image.tmdb.org/t/p/w300/${trending.poster_path}`}
                            alt={trending.title || trending.name}
                            style={{ width: "100%", height: "200px", objectFit: "contain" }}
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h6" >
               <Link to="#" style={{ "textDecoration": "none", "color": "#fff", "fontWeight": "bold", "textAlign": "left" }}>View more »</Link>
            </Typography>
        </Container>
    );
}

export default Trending;