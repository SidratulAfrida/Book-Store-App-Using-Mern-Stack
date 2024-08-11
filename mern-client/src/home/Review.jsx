import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import proPic1 from "../assets/profile.jpg";
import proPic2 from "../assets/profile2.jpg";
import proPic3 from "../assets/profile3.jpg";
import proPic4 from "../assets/profile4.jpg";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  // Array of review data with different images
  const reviews = [
    {
      image: proPic1,
      text: "This bookstore app is amazing! The selection is vast, and the user experience is top-notch.",
      name: "John Doe",
      position: "Book Enthusiast",
    },
    {
      image: proPic2,
      text: "I've found so many rare books here that I couldn't find anywhere else. Highly recommend!",
      name: "Jane Smith",
      position: "Literary Professional",
    },
    {
      image: proPic3,
      text: "The customer service is excellent, and the app is very easy to navigate. Love it!",
      name: "Michael Lee",
      position: "Avid Reader",
    },
    {
      image: proPic4,
      text: "A great platform for managing my book collection. The app is very user-friendly!",
      name: "Emily Davis",
      position: "Book Collector",
    },
  ];

  return (
    <div className='my-12 px-8 lg:px-24 bg-blue-50 py-16'>
      <h2 className='text-5xl font-bold text-center mb-10 leading-snug text-gray-800'>Our Customers</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 60,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className='shadow-lg bg-white py-8 px-6 md:mx-5 rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl'>
            <div className='space-y-6'>
              <div className='text-amber-500 flex gap-1 justify-center'>
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-xl"/>
                ))}
              </div>
              <div className='mt-7 text-center'>
                <p className='mb-5 text-gray-600'>{review.text}</p>
                <Avatar 
                  alt={`avatar of ${review.name}`}
                  img={review.image}
                  rounded 
                  className='w-20 h-20 mb-4 mx-auto border-4 border-blue-100' 
                />
                <h5 className='text-xl font-medium text-gray-900'>{review.name}</h5>
                <p className='text-sm text-blue-500'>{review.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Review;
