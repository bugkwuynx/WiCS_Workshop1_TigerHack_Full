import { useState } from 'react';
import {Button, TextField, Box} from '@mui/material';

const createBook = ({onCreate}) => {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover_url, setCoverImage] = useState("");
    const [status, setStatus] = useState("To Read");

    const handleCreateBook = async() => {
        if (!title || !author) {
            alert("Title and author are required");
            return false;
        }
        const newBook = {title, author, cover_url, status};
        console.log(newBook);
        try {
            const response = await fetch(`${import.meta.env.VITE_PORT}/api/books`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newBook),
            });
            if (!response.ok) {
                throw new Error("Failed to create book");
            }
            const result = await response.json();
            onCreate(result.data);
            setTitle("");
            setAuthor("");
            setCoverImage("");
            setStatus("To Read");
            return true;
        }
        catch (error) {
            console.error("Error creating book:", error);
            return false;
        }
    }

    return (
        <div style={{ margin: "20px", maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
            <Box>
                <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)}></TextField>
                <TextField label="Author" value={author} onChange={(e) => setAuthor(e.target.value)}></TextField>
                <TextField label="Cover Image Link" value={cover_url} onChange={(e) => setCoverImage(e.target.value)}></TextField>
            </Box>
            <Button variant="contained" onClick={handleCreateBook}>Create Book</Button>
        </div>
    );
};

export default createBook;