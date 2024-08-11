import React, { useState, useEffect } from 'react';
import { Card } from "flowbite-react";

const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [recentActivities, setRecentActivities] = useState([]);
  const [totalCategories, setTotalCategories] = useState(0);
  const [averageSessionDuration, setAverageSessionDuration] = useState(0);
  const [bookStats, setBookStats] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setBooks(data));

    fetch("http://localhost:5000/all-users")
      .then(res => res.json())
      .then(data => setUsers(data));

    fetch("http://localhost:5000/recent-activities")
      .then(res => res.json())
      .then(data => {
        setRecentActivities(data);

        // Calculate book statistics
        const bookStats = data.reduce((acc, activity) => {
          const { bookTitle } = activity;
          if (!acc[bookTitle]) {
            acc[bookTitle] = { borrowCount: 0, viewCount: 0 };
          }
          if (activity.action === 'borrowed') {
            acc[bookTitle].borrowCount += 1;
          } else if (activity.action === 'viewed') {
            acc[bookTitle].viewCount += 1;
          }
          return acc;
        }, {});
        setBookStats(bookStats);
      });

    fetch("http://localhost:5000/total-categories")
      .then(res => res.json())
      .then(data => setTotalCategories(data.total));

    fetch("http://localhost:5000/average-session-duration")
      .then(res => res.json())
      .then(data => setAverageSessionDuration(data.average));
  }, []);

  return (
    <div className='mt-28 px-4 lg:px-24 bg-gray-100 py-10'>
      <h2 className='text-5xl font-bold text-center mb-8'>Admin Dashboard</h2>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Total Books</h3>
          <p className="text-4xl font-bold text-blue-600">{books.length}</p>
          <p className="text-gray-500 mt-2">Number of books available in the library.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Active Users</h3>
          <p className="text-4xl font-bold text-blue-600">{users.length}</p>
          <p className="text-gray-500 mt-2">Number of users currently active on the platform.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Books Added This Month</h3>
          <p className="text-4xl font-bold text-blue-600">45</p>
          <p className="text-gray-500 mt-2">Number of books added to the collection this month.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">New Users This Month</h3>
          <p className="text-4xl font-bold text-blue-600">15</p>
          <p className="text-gray-500 mt-2">Number of new users who signed up this month.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Total Categories</h3>
          <p className="text-4xl font-bold text-blue-600">{totalCategories}</p>
          <p className="text-gray-500 mt-2">Number of unique book categories.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Average Session Duration</h3>
          <p className="text-4xl font-bold text-blue-600">{averageSessionDuration} mins</p>
          <p className="text-gray-500 mt-2">Average duration of user sessions.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Top Category</h3>
          <p className="text-4xl font-bold text-blue-600">Fiction</p>
          <p className="text-gray-500 mt-2">Most popular book category.</p>
        </Card>
        <Card className="p-6 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold text-gray-800">Most Borrowed Book</h3>
          <p className="text-4xl font-bold text-blue-600">The Great Gatsby</p>
          <p className="text-gray-500 mt-2">Book with the highest number of borrows.</p>
        </Card>
      </div>

      
    </div>
  );
}

export default Dashboard;
