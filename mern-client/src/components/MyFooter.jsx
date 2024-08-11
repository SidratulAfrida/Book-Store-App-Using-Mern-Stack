import React from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full px-4 lg:px-24 py-8 bg-gray-900">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About Us</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Help Center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Support</Footer.Link>
              <Footer.Link href="#">FAQ</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
              <Footer.Link href="#">Live Chat</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Terms of Service</Footer.Link>
              <Footer.Link href="#">Cookie Policy</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS App</Footer.Link>
              <Footer.Link href="#">Android App</Footer.Link>
              <Footer.Link href="#">Windows App</Footer.Link>
              <Footer.Link href="#">MacOS App</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-white text-sm">© {new Date().getFullYear()} Books, Inc. All rights reserved.</p>
          </div>
          <div className="mt-4 flex justify-center space-x-6">
            <Footer.Icon href="https://www.facebook.com/SynesisIT/" icon={BsFacebook} className="text-white hover:text-blue-600" />
            <Footer.Icon href="https://www.instagram.com/explore/locations/701381166650909/synesis-it-dhaka/" icon={BsInstagram} className="text-white hover:text-pink-600" />
            <Footer.Icon href="#" icon={BsTwitter} className="text-white hover:text-blue-400" />
            <Footer.Icon href="https://github.com/SidratulAfrida" icon={BsGithub} className="text-white hover:text-gray-500" />
            <Footer.Icon href="#" icon={BsDribbble} className="text-white hover:text-pink-400" />
          </div>
          <div className="mt-4 text-center md:text-right">
            <p className="text-white">Contact Us:</p>
            <a href="mailto:tulisidratul@gmail.com" className="text-blue-400 hover:underline">sidratulafrida31@gmail.com</a>
            <p className="mt-2 text-white">Address:</p>
            <p className="text-white">Dhaka, Karwan Bazar</p>
            <p className="mt-2 text-white">Phone:</p>
            <a href="tel:+88015638655" className="text-blue-400 hover:underline">+880 1563-8655</a>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
