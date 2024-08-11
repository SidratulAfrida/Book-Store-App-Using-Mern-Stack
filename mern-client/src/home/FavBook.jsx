import React from 'react';
import FavBookImg from "../assets/favoritebook.jpg";
import { Link } from 'react-router-dom';

const FavBook = () => {
  return (
    <div className='px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12'>
      {/* Image Section */}
      <div className='md:w-1/2'>
        <img src={FavBookImg} alt='Favorite Books' className='rounded-lg md:w-10/12' />
      </div>

      {/* Content Section */}
      <div className='md:w-1/2 space-y-6'>
        <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>
          Find Your Favorite 
          <span className='text-blue-700'> Book Here!</span>
        </h2>
        <p className='mb-10 text-lg md:w-5/6'>
          Explore a wide range of books tailored to your preferences. Whether you’re looking for the latest bestsellers or classic favorites, we have it all.
        </p>

        {/* Statistics Section */}
        <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
          <div>
            <h3 className='text-3xl font-bold'>800+</h3>
            <p className='text-base'>Book Listings</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>550+</h3>
            <p className='text-base'>Registered Users</p>
          </div>
          <div>
            <h3 className='text-3xl font-bold'>1200+</h3>
            <p className='text-base'>PDF Downloads</p>
          </div>
        </div>

        {/* Explore More Button */}
        <Link to="/shop" className='mt-12 block'>
          <button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300'>
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FavBook;
