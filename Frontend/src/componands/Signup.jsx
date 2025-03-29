// import React from "react";
// import { useNavigate } from "react-router-dom"; // If using React Router
// import { useForm } from "react-hook-form";
// import axios from "axios";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//       confirmpassword: data.confirmpassword,
//     };
//     await axios.post("http://localhost:3001/user/signup", userInfo)
//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           alert("Signup sucessfully");
//         }

//       })
//       .catch((err) => {
//         console.log(err);
//         alert("Error: " + err);

//       })

//   }
//   return (
//     <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center " style={{ backgroundImage: "url('../../public/image.png')" }}>
//       <div className=" bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md bg-transparent">
//         <button onClick={() => navigate("/")} className="cursor-pointer absolute top-2 right-2 text-white text-xl">✖</button>
//         <h2 className="text-white text-2xl font-semibold text-center mb-4">Sign Up</h2>
//         <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//           <label className="block text-white">Full Name</label>
//           <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your full name" required />

//           <label className="block text-white mt-4">Email</label>
//           <input type="email" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your email" required />

//           <label className="block text-white mt-4">Password</label>
//           <input type="password" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your password" required />

//           <label className="block text-white mt-4">Confirm Password</label>
//           <input type="password" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Confirm your password" required />

//           <button type="submit" className="cursor-pointer w-full mt-4 p-2 bg-yellow-300 text-blue-900 font-bold rounded-md hover:bg-yellow-400">Sign Up</button>
//           <p className="text-center text-white mt-4">Already have an account? <a href="/Login" className="text-yellow-300">Login</a></p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmpassword,
    };

    try {
      const res = await axios.post("http://localhost:3001/user/signup", userInfo);
      console.log(res.data);
      if (res.data.user) {
        toast.success('Signup successfully!');
        navigate("/login"); // Redirect to login page after signup
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch(err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message);
      }
    };
    
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center"
      style={{ backgroundImage: "url('/image.png')" }}
    >
      <div className="bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md bg-transparent">
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer absolute top-2 right-2 text-white text-xl"
        >
          ✖
        </button>
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <label className="block text-white">Full Name</label>
          <input
            type="text"
            {...register("fullname", { required: "Full Name is required" })}
            className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300"
            placeholder="Enter your full name"
          />
          {errors.fullname && <p className="text-red-700">{errors.fullname.message}</p>}

          {/* Email */}
          <label className="block text-white mt-4">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300"
            placeholder="Enter your email"
          />
          {errors.email && <p className="text-red-700">{errors.email.message}</p>}

          {/* Password */}
          <label className="block text-white mt-4">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required", minLength: 6 })}
            className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300"
            placeholder="Enter your password"
          />
          {errors.password && <p className="text-red-700">{errors.password.message}</p>}

          {/* Confirm Password */}
          <label className="block text-white mt-4">Confirm Password</label>
          <input
            type="password"
            {...register("confirmpassword", { required: "Confirm Password is required" })}
            className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300"
            placeholder="Confirm your password"
          />
          {errors.confirmpassword && <p className="text-red-700">{errors.confirmpassword.message}</p>}

          <button
            type="submit"
            className="cursor-pointer w-full mt-4 p-2 bg-yellow-300 text-blue-900 font-bold rounded-md hover:bg-yellow-400"
          >
            Sign Up
          </button>
          <p className="text-center text-white mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-yellow-300">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
