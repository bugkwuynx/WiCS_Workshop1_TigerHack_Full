import express from "express";
import Book from "../models/book.model.js";

const router = express.Router();

// create book
router.post("/", async (req, res) => {
    try {
        const {title, author, cover_url} = req.body;
        if (!title || !author) {
            return res.status(400).json({message: 'Title and author are required'});
        }
        const newBook = new Book({title, author, cover_url, status: 'To Read'});
        await newBook.save();
        res.status(201).json({success: true, data: newBook});
    }
    catch (error) {
        console.log(`Error adding book ${error}`);
    }
});

// get book
router.get("/", async (req, res) => {
    try {
        const books = await Book.find({});
        res.status(200).json({success: true, data: books});
    }
    catch (error) {
        console.log(`Error getting book ${error}`);
    }
});

// update status
router.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const {title, author, cover_url, status} = req.body;
        const updatedBook = await Book.findByIdAndUpdate(id, {title, author, cover_url, status}, {new: true});
        res.status(200).json({success: true, data: updatedBook});
    }
    catch (error) {
        console.log(`Error updating book ${error}`);
    }
});

// delete a book
router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        await Book.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Book deleted successfully"});
    }
    catch (error) {
        console.log(error);
    }
});


export default router;