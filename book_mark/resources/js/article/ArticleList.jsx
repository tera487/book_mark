import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Card,
    CardActions,
    CardContent,
    Container,
    Button,
    Typography,
    Link,
    Grid,
} from "@mui/material";

function ArticleList() {
    const [articleData, setArticleData] = useState([
        { title: "test", url: "ddd", id: 1 },
    ]);
    useEffect(async () => {
        await axios.get("/api/articles").then((response) => {
            setArticleData(response.data);
        });
    }, []);

    return (
        <Container sx={{ my: 5, display: "flex" }}>
            <Grid container spacing={2}>
                {articleData.map((article) => (
                    <Grid key={article.id} item xs={4}>
                        <Card sx={{ maxWidth: 345, minHeight: 200, mx: 2 }}>
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                    component="div"
                                >
                                    {article.less_title}
                                </Typography>
                                <Link
                                    target="_blank"
                                    href={article.url}
                                    color="text.secondary"
                                >
                                    {article.less_url}
                                </Link>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default ArticleList;
