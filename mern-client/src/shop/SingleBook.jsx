import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleBook = () => {
  // Destructure the data from useLoaderData
  const { _id, bookTitle, imageURL } = useLoaderData();

  return (
    <div className='mt-28 px-4 lg:px-24'>
      {/* Correct the closing tag for the img element */}
      <img src={imageURL} alt={bookTitle || 'Book cover'} className='h-96' />
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
