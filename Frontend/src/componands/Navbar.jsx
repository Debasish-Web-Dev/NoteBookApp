// import React, { useEffect, useState } from 'react'
// import image from "../../public/notebook.gif"

// function Navbar() {
//     const [sticky, setSticky] = useState(false);
//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 0) {
//                 setSticky(true);
//             }
//             else {
//                 setSticky(false);
//             }
//         }
//         window.addEventListener("scroll", handleScroll);
//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);
//     return (
//         <div>
//             <header className={`text-gray-900 body-font max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50    ${sticky
//                 ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-300 dark:text-black duration-500 transition-all ease-in-out" : ""}`}>
//                 <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//                     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//                         {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//                             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//                         </svg> */}
//                         <img src={image} className='w-10 h-10 md:w-[50px] md:h-[40px] md:ml-12' alt="" />
//                         <span className="ml-3 text-2xl font-bold cursor-pointer">NoteBook</span>
//                     </a>
//                     <nav className="md:ml-auto md:mr-auto flex flex-wrap gap-5 items-center text-base justify-center">
//                         <a href='/' className="mr-5 hover:text-gray-900">Home</a>
//                         <a className="mr-5 hover:text-gray-900">Course</a>
//                         <a className="mr-5 hover:text-gray-900">About</a>
//                         <a className="mr-5 hover:text-gray-900">Contact</a>
//                         <a className="mr-5 hover:text-gray-900">Notes</a>
//                         <a href='/Banner' className="mr-5 hover:text-gray-900">Free</a>
//                     </nav>

//                     <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start">
//                         <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
//                             <label for="footer-field" className="leading-7 text-sm text-gray-600"></label>
//                             <input type="text" id="footer-field" name="footer-field" placeholder='search....' className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
//                         </div>
//                         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">login</button>
//                     </div>


//                 </div>
//             </header>


//         </div>
//     )
// }

// export default Navbar



// import React, { useEffect } from "react";
// import { useState } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );
//   const element = document.documentElement;
//   useEffect(() => {
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//       document.body.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//       document.body.classList.remove("dark");
//     }
//   }, [theme]);

//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const navItems = (
//     <>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/course">Course</a>
//       </li>
//       <li>
//         <a>Contact</a>
//       </li>
//       <li>
//         <a>About</a>
//       </li>
//     </>
//   );
//   return (
//     <>
//       <div
//         className={` max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0 z-50 ${
//           sticky
//             ? "sticky-navbar shadow-md bg-base-200 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
//             : ""
//         }`}
//       >
//         <div className="navbar ">
//           <div className="navbar-start">
//             <div className="dropdown">
//               <div
//                 tabIndex={0}
//                 role="button"
//                 className="btn btn-ghost lg:hidden"
//               >
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h8m-8 6h16"
//                   />
//                 </svg>
//               </div>
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//               >
//                 {navItems}
//               </ul>
//             </div>
//             <a className=" text-2xl font-bold cursor-pointer">bookStore</a>
//           </div>
//           <div className="navbar-end space-x-3">
//             <div className="navbar-center hidden lg:flex">
//               <ul className="menu menu-horizontal px-1">{navItems}</ul>
//             </div>
//             <div className="hidden md:block">
//               <label className=" px-3 py-2 border rounded-md flex items-center gap-2">
//                 <input
//                   type="text"
//                   className="grow outline-none rounded-md px-1 dark:bg-slate-900 dark:text-white"
//                   placeholder="Search"
//                 />
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 16 16"
//                   fill="currentColor"
//                   className="w-4 h-4 opacity-70"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </label>
//             </div>
//             <label className="swap swap-rotate">
//               {/* this hidden checkbox controls the state */}
//               <input
//                 type="checkbox"
//                 className="theme-controller"
//                 value="synthwave"
//               />

//               {/* sun icon */}
//               <svg
//                 className="swap-off fill-current w-7 h-7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//               >
//                 <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
//               </svg>

//               {/* moon icon */}
//               <svg
//                 className="swap-on fill-current w-7 h-7"
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 24 24"
//                 onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//               >
//                 <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
//               </svg>
//             </label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;



// import React, { useEffect, useState } from "react";

// function Navbar() {
//     const [theme, setTheme] = useState(
//         localStorage.getItem("theme") || "light"
//     );
//     const [sticky, setSticky] = useState(false);
//     const element = document.documentElement;

//     useEffect(() => {
//         if (theme === "dark") {
//             element.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//             document.body.classList.add("dark");
//         } else {
//             element.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//             document.body.classList.remove("dark");
//         }
//     }, [theme]);

//     useEffect(() => {
//         const handleScroll = () => {
//             setSticky(window.scrollY > 0);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navItems = (
//         <>
//             <li className="list-none">
//                 <a href="/" className="hover:text-indigo-500 transition-all">Home</a>
//             </li>
//             <li className="list-none">
//                 <a href="/course" className="hover:text-indigo-500 transition-all">Course</a>
//             </li>
//             <li className="list-none">
//                 <a href="/contact" className="hover:text-indigo-500 transition-all">Contact</a>
//             </li>
//             <li className="list-none">
//                 <a href="/about" className="hover:text-indigo-500 transition-all">About</a>
//             </li>
//         </>
//     );

//     return (
//         <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky
//             ? "bg-white shadow-md dark:bg-gray-900 dark:text-white"
//             : "bg-transparent"
//             }`}>
//             <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex justify-between items-center py-3">
//                 {/* Logo */}
//                 <a className="text-2xl font-bold cursor-pointer">📚 NoteBook</a>

//                 {/* Navigation Menu */}
//                 <nav className="hidden md:flex space-x-6">{navItems}</nav>

//                 {/* Search and Theme Toggle */}
//                 <div className="flex items-center space-x-4">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="hidden md:block bg-gray-100 rounded-md py-1 px-3 border border-gray-300 focus:ring-indigo-500 dark:bg-gray-800 dark:text-white"
//                     />

//                     {/* Theme Toggle Button */}
//                     <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
//                         {theme === "dark" ? "🌞" : "🌙"}
//                     </button>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Navbar;


// import React, { useEffect, useState } from "react";

// function Navbar() {
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
//   );

//   useEffect(() => {
//     const element = document.documentElement;
//     if (theme === "dark") {
//       element.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       element.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [theme]);

//   const [sticky, setSticky] = useState(false);
//   useEffect(() => {
//     const handleScroll = () => {
//       setSticky(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navItems = (
//     <>
//       <li className="list-none">
//         <a href="/" className="hover:text-indigo-500 transition-all">Home</a>
//       </li>
//       <li className="list-none">
//         <a href="/course" className="hover:text-indigo-500 transition-all">Course</a>
//       </li>
//       <li className="list-none">
//         <a href="/contact" className="hover:text-indigo-500 transition-all">Contact</a>
//       </li>
//       <li className="list-none">
//         <a href="/about" className="hover:text-indigo-500 transition-all">About</a>
//       </li>
//     </>
//   );

//   return (
//     <div
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         sticky
//           ? "bg-white shadow-md dark:bg-gray-900 dark:text-white"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="navbar flex justify-between items-center py-3">
//           {/* Logo */}
//           <a className="text-2xl font-bold cursor-pointer">📚 BookStore</a>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex space-x-6 text-lg">{navItems}</ul>

//           {/* Search Bar (Hidden on Mobile) */}
//           <div className="hidden md:flex">
//             <input
//               type="text"
//               className="border px-2 py-1 rounded-md dark:bg-gray-700 dark:text-white"
//               placeholder="Search"
//             />
//           </div>

//           {/* Theme Toggle */}
//           <button
//             className="text-xl"
//             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
//           >
//             {theme === "dark" ? "🌞" : "🌙"}
//           </button>

//           {/* Mobile Menu */}
//           <div className="md:hidden">
//             <div className="dropdown">
//               <button className="text-2xl">☰</button>
//               <ul className="absolute right-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-4">
//                 {navItems}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;


// that's the final navbar


import React, { useEffect, useState } from "react";
import image from "../../public/notebook.gif";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = (
        <>
            <li className="list-none">
                <a
                    href="/"
                    className="relative text-lg font-medium transition-all duration-300 hover:text-indigo-500 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
          after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Home
                </a>
            </li>
            <li className="list-none">
                <a
                    href="/course"
                    className="relative text-lg font-medium transition-all duration-300 hover:text-indigo-500 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
          after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Course
                </a>
            </li>
            <li className="list-none">
                <a
                    href="/contact"
                    className="relative text-lg font-medium transition-all duration-300 hover:text-indigo-500 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
          after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    Contact
                </a>
            </li>
            <li className="list-none">
                <a
                    href="/about"
                    className="relative text-lg font-medium transition-all duration-300 hover:text-indigo-500 
          after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] 
          after:bg-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                    About
                </a>
            </li>
        </>
    );


    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${sticky
                    ? "bg-white shadow-md dark:bg-white dark:text-black"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div className="navbar flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="flex gap-5">

                        <img className="w-10" src={image} alt="" />
                        <a className="text-2xl font-bold cursor-pointer">
                            NoteBook</a>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6 text-lg">{navItems}</ul>

                    {/* Search Bar (Hidden on Mobile) */}
                    <div className="hidden md:flex">
                        <input
                            type="text"
                            className="border px-2 py-1 rounded-md dark:bg-gray-700 dark:text-white"
                            placeholder="Search"
                        />
                    </div>
                    <div className="relative group">
                        <button
                            onClick={() => navigate("/login")}
                            className="px-6 py-1 text-white font-semibold text-lg rounded-xl 
                                       bg-gray-700 transition-all duration-300 ease-in-out 
                                       hover:bg-black hover:shadow-lg 
                                       active:scale-90 relative cursor-pointer"
                        >
                            Login
                        </button>
                    </div>

                   

                    {/* Mobile Menu */}
                    <div className="md:hidden relative">
                        <button
                            className="text-2xl"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            ☰
                        </button>
                        {isMenuOpen && (
                            <ul className="absolute right-0 mt-2 w-48 bg-white dark:bg-white shadow-md rounded-md p-4 flex flex-col space-y-2">
                                {navItems}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
