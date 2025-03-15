import { useState, useEffect } from "react";
import CreateBook from "./createBook";
import UpdateBook from "./updateBook";
import DeleteBook from "./deleteBook";
import {Card, CardContent, Typography, CardActions, Button} from "@mui/material";

const DisplayBook = () => {
    const [books, setBooks] = useState([]);

    const handleCreate = (newBook) => {
        setBooks((prevBooks) => [...prevBooks, newBook]);
    }

    const handleUpdate = (updatedBook) => {
        setBooks((prevBooks) => 
            prevBooks.map((book) => 
                book._id === updatedBook._id ? updatedBook : book
            )
        );
    }

    const handleDelete = (bookId) => {
        setBooks((prevBooks) => 
            prevBooks.filter((book) => book._id !== bookId)
        );
    }

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_PORT}/api/books`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch books");
                }
                const result = await response.json();
                const res = Array.isArray(result.data) ? result.data : [result.data];
                setBooks(res);
                return true;
            } catch (error) {
                console.error("Error fetching books:", error);
                return false;
            }
        }
        fetchBooks();
    }, []);

    return (
        <>
            <CreateBook onCreate={handleCreate}/>
            <div style={{ margin: "20px", maxWidth: "800px", width: "100%", marginLeft: "auto", marginRight: "auto" }}>
                {books.map((book, index) => (
                    <Card key={book._id || index}>
                        <CardContent>
                            <Typography variant="h5" component="div">
                            {book.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.author}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {book.status}
                        </Typography>

                        <img src={book.cover_url} width={100} height={100}/>
                    </CardContent>
                    <CardActions>
                        <UpdateBook book={book} onUpdate={handleUpdate}/>
                        <DeleteBook book={book} onDelete={handleDelete}/>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    );
    
}

export default DisplayBook;