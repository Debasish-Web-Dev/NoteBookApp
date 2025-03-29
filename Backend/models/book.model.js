import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    icon: String,
    gradient: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;