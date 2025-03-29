// import React from 'react'

// function Card({items}) {
//     return (
//         <div>
//             <section class="text-gray-600 body-font">
//                 <div class="container px-5 py-24 mx-auto">
//                     <div class="flex flex-wrap -m-4">
//                         <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
//                             <a class="block relative h-48 rounded overflow-hidden">
//                                 <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={items.image}/>
//                             </a>
//                             <div class="mt-4">
//                                 <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{items.category}</h3>
//                                 <h2 class="text-gray-900 title-font text-lg font-medium">{items.title}</h2>
//                                 <p class="mt-1">${items.price}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Card



// import React from "react";

// function Card({ items }) {
//   return (
//     <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
//       <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
//         <a className="block relative h-48">
//           <img
//             alt="ecommerce"
//             className="object-cover object-center w-full h-full"
//             src={items.image}
//           />
//         </a>
//         <div className="p-4">
//           <h3 className="text-gray-500 text-xs uppercase tracking-widest mb-1">
//             {items.category}
//           </h3>
//           <h2 className="text-gray-900 text-lg font-medium">{items.title}</h2>
//           <p className="mt-1 text-pink-500 font-bold">${items.price}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;


// import React from "react";

// function Card({ items }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={items.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {items.name}
//               <div className="badge badge-secondary">{items.category}</div>
//             </h2>
//             <p>{items.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${items.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;



// function Card({ items }) {
//     return (
//         <div>
//             <div className="flex flex-wrap justify-center gap-6 p-10">
//                 <div
//                     className={`w-80 p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 bg-gradient-to-b ${items.gradient}`}
//                 >
//                     <div className="text-5xl">{items.icon}</div>
//                     <h2 className="text-white text-2xl font-bold mt-4">{items.title}</h2>
//                     <p className="text-gray-100 mt-2">{items.description}</p>
//                     <h3 className="text-white text-3xl font-bold mt-4">{items.price}</h3>
//                     <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
//                         Buy Now
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Card;


// function Card({ items }) {
//     return (
//         <div className="flex justify-center p-4">
//             <div
//                 className={`w-80 p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 bg-gradient-to-b ${items.gradient}`}
//             >
//                 <div className="text-5xl">{items.icon}</div>
//                 <h2 className="text-white text-2xl font-bold mt-4">{items.title}</h2>
//                 <p className="text-white mt-2">{items.description}</p>
//                 <h3 className="text-white text-3xl font-bold mt-4">{items.price}</h3>
//                 <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
//                     Buy Now
//                 </button>
//             </div>
//         </div>
//     );
// }

// export default Card;


function Card({ items }) {
    // Define gradient colors based on the title
    const gradientColors = {
        "Basic": "from-blue-500 to-blue-300",
        "Standard": "from-purple-500 to-purple-300",
        "Premium": "from-pink-500 to-pink-300",
    };

    return (
        <div className="flex justify-center p-4">
            <div
                className={`w-80 p-6 rounded-2xl shadow-lg text-center transition-transform duration-300 hover:scale-105 
                bg-gradient-to-b ${gradientColors[items.title] || "from-gray-500 to-gray-300"} text-white`}
            >
                <div className="text-5xl">{items.icon}</div>
                <h2 className="text-white text-2xl font-bold mt-4">{items.title}</h2>
                <p className="text-white mt-2">{items.description}</p>
                <h3 className="text-white text-3xl font-bold mt-4">{items.price}</h3>
                <button className="mt-6 bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                    Buy Now
                </button>
            </div>
        </div>
    );
}

export default Card;
