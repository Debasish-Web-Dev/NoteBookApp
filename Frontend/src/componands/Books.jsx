// import React from 'react'

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";

// import list from "../../public/listBooks.json"

// function Books() {

//   const filterData = list.filter((data)=>data.category==="Free");
//   console.log(filterData);

// var settings = {
//   dots: true,
//   infinite: false,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 3,
//   initialSlide: 0,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         initialSlide: 2,
//       },
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };
// return (
//   <div>
//     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//       <div>
//         <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//           Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
//           corporis nulla non suscipit, iure neque earum?
//         </p>
//       </div>
{/* <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <Slider item={item} key={item.id} />
            ))}
          </Slider>
        </div> */}
//       </div>
//     </div>
//   )
// }

// export default Books




import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../public/css/Books.css";

function Books() {
  const [list, setList] = useState([]);

  // Fetch JSON data from public folder
  useEffect(() => {
    fetch("/listBooks.json")
      .then((response) => response.json())
      .then((data) => {
        setList(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Filter the books where category is "Free"
  const filterData = list.filter((data) => data.category === "Free");
  console.log(filterData);

  var settings = {
    dots: true,
    infinite: true, // Make slider loop infinitely
    speed: 800, // Smooth transition speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2500, // Slide every 2.5 seconds
    pauseOnHover: true, // Pause when hovered
    cssEase: "cubic-bezier(0.25, 1, 0.5, 1)", // Smooth easing
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };
  

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="text-center mb-10 px-20 gap-5">
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium veritatis alias pariatur ad dolor repudiandae eligendi
            corporis nulla non suscipit, iure neque earum?
          </p>
        </div>
        <div>
          <Slider {...settings}>
            {filterData.map((item) => (
              <div key={item.id} className="p-4">
                <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
                <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                <p className="text-sm">{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Books;
