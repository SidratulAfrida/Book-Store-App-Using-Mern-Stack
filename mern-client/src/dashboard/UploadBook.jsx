import React, { useState } from 'react';
import { Button, Label, TextInput, Select, Textarea } from "flowbite-react";

const UploadBook = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Biography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children's Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    };

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
    .then(res => res.json())
    .then(data => {
      alert("Book Uploaded Successfully!!!");
      form.reset();
    })
    .catch(err => console.error("Error uploading book:", err));
  };

  return (
    <div className='px-4 my-12 bg-blue-50 font-sans'> {/* Light blue background and standard font */}
      <h2 className="text-3xl font-bold mb-6 text-gray-900">Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1050px] flex-col gap-4 mx-auto">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2'>
              <Label 
                htmlFor="bookTitle"  
                value="Book Title" 
                className='font-medium text-gray-800'
              />
            </div>
            <TextInput 
              id="bookTitle" 
              name="bookTitle"
              placeholder="Enter the book title" 
              required 
              type="text" 
              className="w-full py-3 text-lg font-medium text-gray-800"
            />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2'>
              <Label 
                htmlFor="authorName" 
                value="Author Name" 
                className='font-medium text-gray-800'
              />
            </div>
            <TextInput 
              id="authorName" 
              name="authorName"
              placeholder="Enter the author's name" 
              required 
              type="text" 
              className="w-full py-3 text-lg font-medium text-gray-800"
            />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className='mb-2'>
              <Label 
                htmlFor="imageURL" 
                value="Book Image URL" 
                className='font-medium text-gray-800'
              />
            </div>
            <TextInput 
              id="imageURL" 
              name="imageURL"
              placeholder="Enter the image URL" 
              required 
              type="text" 
              className="w-full py-3 text-lg font-medium text-gray-800"
            />
          </div>
          <div className='lg:w-1/2'>
            <div className='mb-2'>
              <Label 
                htmlFor="categoryName" 
                value="Book Category" 
                className='font-medium text-gray-800'
              />
            </div>
            <Select 
              id='categoryName' 
              name='categoryName'
              className='w-full rounded border-gray-300 py-3 text-lg font-medium text-gray-800'
              value={selectedBookCategory} 
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <div className='mb-2'>
            <Label 
              htmlFor="bookDescription" 
              value="Book Description" 
              className='font-medium text-gray-800'
            />
          </div>
          <Textarea 
            id="bookDescription" 
            name="bookDescription"
            placeholder="Enter a brief description of the book..." 
            required 
            className='w-full py-3 text-lg font-medium text-gray-800'
            rows={4}
          />
        </div>

        <div>
          <div className="mb-2">
            <Label 
              htmlFor="bookPDFURL" 
              value="Book PDF URL" 
              className='font-medium text-gray-800'
            />
          </div>
          <TextInput 
            id="bookPDFURL" 
            name="bookPDFURL"
            placeholder="Enter the PDF URL" 
            required 
            type="text" 
            className="w-full py-3 text-lg font-medium text-gray-800"
          />
        </div>

        <div className='flex justify-center'>
          <Button 
            type="submit" 
            className='w-full mt-5 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold'
          >
            Upload Book
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;
