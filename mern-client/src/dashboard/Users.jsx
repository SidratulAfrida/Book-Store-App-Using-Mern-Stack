import React from 'react';
// Import user profile images
import userImg1 from "../assets/profile16.jpg";
import userImg2 from "../assets/profile17.jpg";
import userImg3 from "../assets/profile18.jpg";
import userImg4 from "../assets/profile19.jpg";
import userImg5 from "../assets/profile3.jpg";
import userImg6 from "../assets/profile4.jpg";

const Users = () => {
    // Updated user data with unique profile pictures and book details
    const users = [
        {
            _id: '1',
            name: 'John Doe',
            profilePicture: userImg1,
            purchasedBooks: [
                {
                    bookName: 'The Great Adventure',
                    author: 'Jane Austen',
                    price: '$12',
                    purchaseDate: '2024-07-15'
                },
                {
                    bookName: 'Mystery of the Lost City',
                    author: 'Mark Twain',
                    price: '$18',
                    purchaseDate: '2024-08-01'
                }
            ]
        },
        {
            _id: '2',
            name: 'Jane Smith',
            profilePicture: userImg2,
            purchasedBooks: [
                {
                    bookName: 'The Silent Ocean',
                    author: 'Emily Brontë',
                    price: '$25',
                    purchaseDate: '2024-08-05'
                }
            ]
        },
        {
            _id: '3',
            name: 'Alice Johnson',
            profilePicture: userImg3,
            purchasedBooks: [
                {
                    bookName: 'Whispers in the Wind',
                    author: 'Charles Dickens',
                    price: '$30',
                    purchaseDate: '2024-08-10'
                }
            ]
        },
        {
            _id: '4',
            name: 'Bob Brown',
            profilePicture: userImg4,
            purchasedBooks: [
                {
                    bookName: 'Journey Through Time',
                    author: 'H.G. Wells',
                    price: '$22',
                    purchaseDate: '2024-08-15'
                }
            ]
        },
        {
            _id: '5',
            name: 'Emily Davis',
            profilePicture: userImg5,
            purchasedBooks: [
                {
                    bookName: 'The Enchanted Forest',
                    author: 'J.K. Rowling',
                    price: '$20',
                    purchaseDate: '2024-08-20'
                }
            ]
        },
        {
            _id: '6',
            name: 'Michael Wilson',
            profilePicture: userImg6,
            purchasedBooks: [
                {
                    bookName: 'The Last Frontier',
                    author: 'Isaac Asimov',
                    price: '$17',
                    purchaseDate: '2024-08-25'
                }
            ]
        }
    ];

    return (
        <div className='mt-28 px-4 lg:px-24'>
            {/* Users Section */}
            <h3 className='text-4xl font-bold text-center mb-8'>User Overview</h3>
            <div className='bg-blue-50 p-6 rounded-lg shadow-lg'>
                <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                    {users.map(user => (
                        <div key={user._id} className='bg-white p-4 rounded-lg shadow-md'>
                            <img src={user.profilePicture} alt={user.name} className='w-20 h-20 rounded-full mx-auto' />
                            <h4 className='text-xl font-semibold text-center mt-4'>
                                {user.name}
                            </h4>
                            <div className='mt-4'>
                                <h5 className='text-lg font-semibold'>Purchased Books</h5>
                                <table className='w-full mt-2'>
                                    <thead>
                                        <tr>
                                            <th className='text-left'>Book Name</th>
                                            <th className='text-left'>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {user.purchasedBooks.map((book, index) => (
                                            <tr key={index}>
                                                <td className='py-2'>{book.bookName}</td>
                                                <td className='py-2'>{book.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Users;
