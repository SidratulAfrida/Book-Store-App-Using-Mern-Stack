import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";

const Products = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const quotes = [
    "A room without books is like a body without a soul. – Cicero",
    "Books are a uniquely portable magic. – Stephen King",
    "So many books, so little time. – Frank Zappa",
    "A book is a gift you can open again and again. – Garrison Keillor",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. – Mark Twain",
    "A book is a dream that you hold in your hand. – Neil Gaiman",
    "Books are mirrors: you only see in them what you already have inside you. – Carlos Ruiz Zafón",
    "The only thing you absolutely have to know is the location of the library. – Albert Einstein",
    "Reading is essential for those who seek to rise above the ordinary. – Jim Rohn",
    "The more that you read, the more things you will know. The more that you learn, the more places you'll go. – Dr. Seuss"
  ];

  return (
    <div className='mt-28 px-4 lg:px-24'>
      <h2 className='text-5xl font-bold text-center'>All Books are Here</h2>
      <div className='grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1'>
        {
          books.map((book, index) => (
            <Card key={book.id}>
              <img src={book.imageURL} alt='' className='h-96' />
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <p>{book.bookTitle}</p>
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                <p>{quotes[index % quotes.length]}</p>
              </p>
              <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
            </Card>
          ))
        }
      </div>
    </div>
  );
}

export default Products;
