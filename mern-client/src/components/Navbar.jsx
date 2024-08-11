import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import { FaBarsStaggered, FaBlog, FaXmark } from 'react-icons/fa6';
import { AuthContext } from '../contects/AuthProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { user } = useContext(AuthContext);
  console.log(user);

  // Toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle scrolling to sections
  const handleScroll = (e, path) => {
    e.preventDefault();
    if (path.startsWith('#')) {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // navItems here
  const navItems = [
    { link: "Home", path: "#home-section" },
    { link: "About", path: "#about-section" },
    { link: "Shop", path: "/shop" },
    { link: "Sell Your Book", path: "/admin/dashboard" },
    { link: "Blog", path: "#blog-section" },
  ];

  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-150'>
      <nav className={`lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-blue-300" : ""}`}>
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Navigation content here */}
          <Link to="/" className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
            <FaBlog className='inline-block' />Books
          </Link>
          <ul className='md:flex space-x-12 hidden'>
            {navItems.map(({ link, path }) => (
              <li key={path}>
                {path.startsWith('#') ? (
                  <a
                    href={path}
                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                    onClick={(e) => handleScroll(e, path)}
                  >
                    {link}
                  </a>
                ) : (
                  <Link
                    to={path}
                    className="block text-base text-black uppercase cursor-pointer hover:text-blue-700"
                  >
                    {link}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className='space-x-12 hidden lg:flex items-center'>
            <button>
              <FaBarsStaggered className='w-5 hover:text-blue-700' />
            </button>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-black focus:outline-none'>
              {isMenuOpen ? <FaXmark className="h-5 w-5 text-black" /> : <FaBarsStaggered />}
            </button>
          </div>
        </div>

        <div className={`space-y-4 px-4 mt-12 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
          {navItems.map(({ link, path }) => (
            <div key={path}>
              {path.startsWith('#') ? (
                <a
                  href={path}
                  className="block text-base text-white uppercase cursor-pointer"
                  onClick={(e) => handleScroll(e, path)}
                >
                  {link}
                </a>
              ) : (
                <Link
                  to={path}
                  className="block text-base text-white uppercase cursor-pointer"
                >
                  {link}
                </Link>
              )}
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
