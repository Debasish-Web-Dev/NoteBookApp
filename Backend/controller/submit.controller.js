import Submit from "../models/submit.model.js";
export const submit = async(req, res) => {
    try {
        const { name, age, address, query } = req.body;
        // const fileName = req.file ? req.file.filename : "";
        // const filePath = req.file ? req.file.path : "";
        const newSubmit = new Submit({ name, age, address, query});
        await newSubmit.save();
        res.status(201).json({ message: "Form submitted successfully!" });
    } catch (error) {
        console.log("Error: ", error);
        
        res.status(500).json({ message: "Server Error", error });
    }
};


