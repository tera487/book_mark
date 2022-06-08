import React, { useState } from "react";
import axios from "axios";
import ArticleTagSelect from "../components/article/ArticleTagSelect";
import {
    Box,
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography,
} from "@mui/material";

function ArticleCreate() {
    const [url, setUrl] = useState("");
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState([]);

    const createArticle = () => {
        axios.post("/api/articles", { title, url, tag }).then(() => {
            console.log("successful");
        });
    };

    return (
        <Container maxWidth={"xs"}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component={"h1"} variant={"h5"}>
                    Book Mark
                </Typography>
                <Box component={"form"} onSubmit={createArticle}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="title"
                        label="titel"
                        name="title"
                        autoComplete="title"
                        autoFocus
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="url"
                        label="site-url"
                        name="url"
                        autoComplete="url"
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <ArticleTagSelect setTag={setTag}></ArticleTagSelect>
                    <Button
                        fullWidth
                        variant={"outlined"}
                        type={"submit"}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Register
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default ArticleCreate;
