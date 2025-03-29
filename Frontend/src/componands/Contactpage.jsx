// import React, { useState } from "react";
// import toast from "react-hot-toast";

// const Contactpage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         fileName: "",
//         age: "",
//         address: "",
//         query: ""
//     });
//     const [file, setFile] = useState(null);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.id]: e.target.value });
//     };

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//         setFormData({ ...formData, fileName: e.target.files[0]?.name || "" });
//     };


//     const handleSubmit = async (data) => {

//         data.preventDefault();
//         const formDataToSend = new FormData();
//         formDataToSend.append("name", formData.name);
//         formDataToSend.append("age", formData.age);
//         formDataToSend.append("address", formData.address);
//         formDataToSend.append("query", formData.query);
//         if (file) {
//             formDataToSend.append("file", file);
//         }

//         try {
//             const response = await fetch("http://localhost:3001/submit/submit");
//             if (response.ok) {
//                 toast.success("Form submitted successfully!");
//                 // setFormData({ name: "", age: "", address: "", query: "", fileName: "" });
//                 // setFile(null);
//             } else {
//                 toast.error("Error submitting form!");
//             }
//             setTimeout(() => {
//                 window.location.reload();
//             }, 3000);
//         } catch (error) {
//             console.error("Error:", error);
//             toast.error("Server error!");
//         };
//     };


//     return (
//         <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
//             <h2 className="text-xl font-bold mb-4 text-center">User Query & File Upload</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <label className="block">Name:
//                     <input type="text" id="name"  required className="w-full border p-2 rounded" />
//                 </label>

//                 <label className="block">Upload a Notebook (PDF or any file):
//                     <input type="file" accept=".pdf,.doc,.docx,.txt" className="w-full border p-2 rounded" />
//                 </label>
//                 {file && <p className="mt-2 text-green-600">Uploaded File: {file.name}</p>}

//                 <label className="block">Age:
//                     <input type="number" id="age" required className="w-full border p-2 rounded" />
//                 </label>

//                 <label className="block">Address:
//                     <input type="text" id="address" required className="w-full border p-2 rounded" />
//                 </label>

//                 <label className="block">Have a Query?
//                     <textarea id="query" className="w-full border p-2 rounded" placeholder="Ask anything about the website..." />
//                 </label>

//                 <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
//             </form>
//         </div>
//     );
// };

// export default Contactpage;




import React, { useState } from "react";
import toast from "react-hot-toast";

const Contactpage = () => {
    const [formData, setFormData] = useState({
        name: "",
        fileName: "",
        age: "",
        address: "",
        query: ""
    });
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setFormData({ ...formData, fileName: e.target.files[0]?.name || "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("age", formData.age);
        formDataToSend.append("address", formData.address);
        formDataToSend.append("query", formData.query);
        if (file) {
            formDataToSend.append("file", file);
        }

        try {
            const response = await fetch("http://localhost:3001/submit", {
                method: "POST",
                body: formDataToSend,
            });

            if (response.ok) {
                toast.success("Form submitted successfully!");
                setFormData({ name: "", age: "", address: "", query: "", fileName: "" });
                setFile(null);
                setTimeout(() => {
                    window.location.reload();
                }, 3000);
            } else {
                toast.error("Error submitting form!");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Server error!");
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
            <h2 className="text-xl font-bold mb-4 text-center">User Query & File Upload</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block">Name:
                    <input 
                        type="text" 
                        id="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className="w-full border p-2 rounded" 
                    />
                </label>

                <label className="block">Upload a Notebook (PDF or any file):
                    <input 
                        type="file" 
                        accept=".pdf,.doc,.docx,.txt" 
                        onChange={handleFileChange} 
                        className="w-full border p-2 rounded" 
                    />
                </label>
                {file && <p className="mt-2 text-green-600">Uploaded File: {file.name}</p>}

                <label className="block">Age:
                    <input 
                        type="number" 
                        id="age" 
                        value={formData.age} 
                        onChange={handleChange} 
                        required 
                        className="w-full border p-2 rounded" 
                    />
                </label>

                <label className="block">Address:
                    <input 
                        type="text" 
                        id="address" 
                        value={formData.address} 
                        onChange={handleChange} 
                        required 
                        className="w-full border p-2 rounded" 
                    />
                </label>

                <label className="block">Have a Query?
                    <textarea 
                        id="query" 
                        value={formData.query} 
                        onChange={handleChange} 
                        className="w-full border p-2 rounded" 
                        placeholder="Ask anything about the website..." 
                    />
                </label>

                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
};

export default Contactpage;
