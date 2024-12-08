import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        {/* Logo and Description */}
        <div>
          <img src="/logo.png" alt="Logo" className="mb-4 w-32" />
          <p className="text-gray-400 text-sm">
            "company name- Study Abroad" is a student visa processing and consultation agency
            that has been helping students from all over the world. We have a team of experienced
            visa professionals who can help you with every step of the visa processing.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">Free Counseling</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Contact Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Contact Info
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <span>📍</span> Address
            </li>
            <li>
              <span>📞</span> number
            </li>
            <li>
              <span>📞</span> number
            </li>
            <li>
              <span>📧</span> mail
            </li>
            <li>
              <span>📧</span> mail
            </li>
          </ul>
        </div>

        {/* Chat Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-red-500 inline-block">
            Chat Us
          </h3>
          <p className="text-gray-400 text-sm mb-4">
            Connect with us through WhatsApp
          </p>
          <div className="bg-gray-800 text-white py-2 px-4 mb-4 rounded-md">
            number
          </div>
          <a
            href="#"
            className="bg-red-500 text-white text-sm py-2 px-4 rounded-md hover:bg-red-600 inline-block"
          >
            WhatsApp Now
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
