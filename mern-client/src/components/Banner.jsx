import React from 'react'
import BannerCard from '../home/BannerCard'



const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex place-items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center
         gap-12 py-40'>
            <div className='md:w-1/2 space-y-8 h-full'>
               <h3 className='text-5xl font-bold leading-snug text-black'>Buy And Sell Your Books
                <span className='text-blue-700'> for the Best Prices</span>
               </h3>
               <p className='mb-10 text-lg md:w-5/6'>Our Bookstore App is a modern, user-friendly platform designed for book enthusiasts, avid readers, and literary professionals. Whether you're looking to explore a vast collection of books, manage your book inventory with fellow readers. Our app offers a comprehensive solution tailored to your needs.</p>
               <div>
                <input type='search' name='search' id='search' placeholder='Search a Book'
                 className='py-2 px-2 rounded-s-sm outline-none' />
                 <button className='bg-blue-700 px-6 py-2 text-white font-medium
                 hover:bg-black transition-all ease-in duration-200'>
                    Search
                 </button>
               </div>

         </div>
            <div>
               <BannerCard></BannerCard>
            </div>
            
            </div>
            </div>
  )
}

export default Banner