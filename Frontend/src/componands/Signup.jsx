import React from "react";
import { useNavigate } from "react-router-dom"; // If using React Router

const SignUp = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center " style={{ backgroundImage: "url('../../public/image.png')" }}>
      <div className=" bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md bg-transparent">
      <button onClick={() => navigate("/")} className="cursor-pointer absolute top-2 right-2 text-white text-xl">✖</button>
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Sign Up</h2>
        <form>
          <label className="block text-white">Full Name</label>
          <input type="text" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your full name" required />
          
          <label className="block text-white mt-4">Email</label>
          <input type="email" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your email" required />
          
          <label className="block text-white mt-4">Password</label>
          <input type="password" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Enter your password" required />
          
          <label className="block text-white mt-4">Confirm Password</label>
          <input type="password" className="w-full p-2 rounded-md bg-transparent border border-white text-white focus:outline-none focus:border-yellow-300" placeholder="Confirm your password" required />
          
          <button type="submit" className="cursor-pointer w-full mt-4 p-2 bg-yellow-300 text-blue-900 font-bold rounded-md hover:bg-yellow-400">Sign Up</button>
          <p className="text-center text-white mt-4">Already have an account? <a href="/Login" className="text-yellow-300">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
