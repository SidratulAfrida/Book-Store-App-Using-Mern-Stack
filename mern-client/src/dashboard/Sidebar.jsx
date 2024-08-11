import React from 'react';
import { Sidebar as FlowbiteSidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards, HiSupport, HiOutlineCloudUpload } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import userImg from '../assets/profile.jpg'; // Ensure this path is correct

const Sidebar = () => {
  return (
    <FlowbiteSidebar
      aria-label="Sidebar with content separator example"
      className="bg-white text-gray-900 shadow-lg w-64 flex flex-col items-start"
    >
      {/* Logo Section */}
      <div className="px-4 py-6 flex flex-col items-center space-y-4 w-full">
        <img src={userImg} alt="Profile" className="w-15 h-25 rounded-full border-2 border-gray-300" />
        {/* <p className="font-bold w-16">Flowbite</p> */}
      </div>

      {/* Sidebar Items */}
      <FlowbiteSidebar.Items className="w-full">
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard"
            icon={HiChartPie}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Dashboard</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Upload Book</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard/manage"
            icon={HiInbox}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Manage Books</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard/users"
            icon={HiUser}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Users</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard/products"
            icon={HiShoppingBag}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Products</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/login"
            icon={HiArrowSmRight}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Sign In</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/logout"
            icon={HiTable}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Log Out</span>
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
        <FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard" // Updated to route to /admin/dashboard
            icon={HiChartPie}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Upgrade to Pro</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard" // Updated to route to /admin/dashboard
            icon={HiViewBoards}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Documentation</span>
          </FlowbiteSidebar.Item>
          <FlowbiteSidebar.Item
            as={Link} // Use Link component
            to="/admin/dashboard" // Updated to route to /admin/dashboard
            icon={HiSupport}
            className="hover:bg-gray-100 rounded-lg transition-colors duration-300 flex items-center space-x-2 px-4 py-2 w-full"
          >
            <span>Help</span>
          </FlowbiteSidebar.Item>
        </FlowbiteSidebar.ItemGroup>
      </FlowbiteSidebar.Items>
    </FlowbiteSidebar>
  );
};

export default Sidebar;
