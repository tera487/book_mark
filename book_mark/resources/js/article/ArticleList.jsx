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
        <Container fixed sx={{ my: 5 }}>
            {articleData.map((article) => (
                <Card sx={{ maxWidth: 345 }} key="article.id">
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {article.title}
                        </Typography>
                        <Link
                            target="_blank"
                            href={article.url}
                            color="text.secondary"
                        >
                            {article.url}
                        </Link>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}

export default ArticleList;
