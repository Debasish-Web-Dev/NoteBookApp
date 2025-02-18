import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: "url('../../public/image.png')" }}>
      <div className="bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md bg-transparent">
      <button onClick={() => navigate("/")} className="cursor-pointer absolute top-2 right-2 text-white text-xl">✖</button>
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="block text-white">Email</label>
          <input type="email" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" {...register("email", { required: true })} placeholder="Enter your email" required />
          {errors.email && <span className="text-sm text-red-800">This field is required</span>}

          <label className="block text-white mt-4">Password</label>
          <input type="password" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" {...register("password", { required: true })} placeholder="Enter your password" required />
          {errors.password && <span className="text-sm text-red-800">This field is required</span>}

          <div className="flex justify-between items-center text-white mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-yellow-300">Forgot Password?</a>
          </div>

          <button type="submit" className="cursor-pointer w-full mt-4 p-2 bg-yellow-300 text-blue-900 font-bold rounded-md hover:bg-yellow-400">Login</button>
          <p className="text-center text-white mt-4">Don't have an account? <a href="/Signup" className="text-yellow-300">Register</a></p>
        </form>
      </div>
    </div>

  );
};

export default Login;
