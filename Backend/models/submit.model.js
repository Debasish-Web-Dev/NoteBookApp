import mongoose from "mongoose";

const submitSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    query: String,
    // fileName: String,
    // filePath: String,
});
const Submit = mongoose.model("Submit", submitSchema);
export default Submit;