import {Button} from "@mui/material";

const DeleteBook = ({book, onDelete}) => {
    const handleDelete = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_PORT}/api/books/${book._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("Failed to delete book");
            }
            const result = await response.json();
            onDelete(book._id);
            return true;
        }
        catch (error) {
            console.error("Error deleting book:", error);
            return false;
        }
    }
    return (
        <Button variant="contained" onClick={handleDelete}>Delete</Button>
    );
}

export default DeleteBook;
