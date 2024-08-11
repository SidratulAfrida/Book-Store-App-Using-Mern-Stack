import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data))
      .catch(err => console.error('Error fetching books:', err));
  }, []);

  // Handle delete functionality
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/book/${id}`, {
      method: 'DELETE',
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok.');
      }
      return res.json();
    })
    .then(() => {
      alert("Book has been deleted successfully!");
      // Update the state to remove the deleted book
      setAllBooks(allBooks.filter(book => book._id !== id));
    })
    .catch(err => {
      console.error('Error deleting book:', err);
      alert("There was an error deleting the book.");
    });
  };

  return (
    <div className='px-4 my-12 bg-blue-50 font-sans'> {/* Light blue background and standard font */}
      <h2 className="mb-8 text-3xl font-semibold text-gray-800">Manage Your Books</h2>
      <Table className='lg:w-full'>
        <Table.Head className='bg-blue-100'>
          <Table.HeadCell className='text-gray-600 font-semibold'>No.</Table.HeadCell>
          <Table.HeadCell className='text-gray-600 font-semibold'>Book Name</Table.HeadCell>
          <Table.HeadCell className='text-gray-600 font-semibold'>Author Name</Table.HeadCell>
          <Table.HeadCell className='text-gray-600 font-semibold'>Category</Table.HeadCell>
          <Table.HeadCell className='text-gray-600 font-semibold'>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y divide-gray-200">
          {allBooks.map((book, index) => (
            <Table.Row key={book._id} className="bg-white hover:bg-blue-50">
              <Table.Cell className="whitespace-nowrap text-gray-700 font-medium">{index + 1}</Table.Cell>
              <Table.Cell className="whitespace-nowrap text-gray-700 font-medium">{book.bookTitle}</Table.Cell>
              <Table.Cell className="text-gray-600 font-medium">{book.authorName}</Table.Cell>
              <Table.Cell className="text-gray-600 font-medium">{book.category}</Table.Cell>
              <Table.Cell className="text-gray-600 font-medium">
                {book.price ? `$${book.price.toFixed(2)}` : 'N/A'}
              </Table.Cell>
              <Table.Cell className="flex space-x-6">
                <Link
                  className="font-medium text-cyan-600 hover:underline"
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(book._id)}
                  className='bg-red-500 px-4 py-1 font-medium text-white rounded-sm hover:bg-red-600'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default ManageBooks;
