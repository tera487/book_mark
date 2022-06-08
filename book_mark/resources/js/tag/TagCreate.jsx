import React, { useState } from "react";
import axios from "axios";

import {
    Box,
    Button,
    Container,
    TextField,
    CssBaseline,
    Typography,
} from "@mui/material";

export default function TagCreate() {
    const [name, setName] = useState("");

    const createArticle = () => {
        axios.post("/api/tags", { name }).then(() => {
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
                    Tag
                </Typography>
                <Box component={"form"} onSubmit={createArticle}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="tag"
                        label="tag"
                        name="url"
                        autoComplete="tag"
                        onChange={(e) => setName(e.target.value)}
                    />
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
