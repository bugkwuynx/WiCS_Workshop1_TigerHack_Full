import { useState } from "react";
import {FormControl, InputLabel, Select, MenuItem, Button} from "@mui/material";

const UpdateBook = ({book, onUpdate}) => {
    const [newStatus, setNewStatus] = useState(book.status);
    const updatedBook = {
        _id: book._id,
        title: book.title,
        author: book.author,
        cover_url: book.cover_url,
        status: newStatus,
    };

    const handleUpdate = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_PORT}/api/books/${book._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedBook),
            });
            if (!response.ok) {
                throw new Error("Failed to update book");
            }
            const result = await response.json();
            onUpdate(result.data);
            return true;
        }
        catch (error) {
            console.error("Error updating book:", error);
            return false;
        }
    }

    return (
        <div>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Select value={newStatus} onChange={(e) => setNewStatus(e.target.value)}>
                    <MenuItem value="To Read">To Read</MenuItem>
                    <MenuItem value="Currently Reading">Currently Reading</MenuItem>
                    <MenuItem value="Finished">Finished</MenuItem>
                </Select>
                <Button variant="contained" onClick={handleUpdate}>Update</Button>
            </FormControl>
        </div>
    )
}

export default UpdateBook;
