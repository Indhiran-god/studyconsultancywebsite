import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © 2024 Restaurant Booker. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="https://facebook.com" className="text-white hover:text-gray-400 mx-2">Facebook</a>
          <a href="https://instagram.com" className="text-white hover:text-gray-400 mx-2">Instagram</a>
          <a href="https://twitter.com" className="text-white hover:text-gray-400 mx-2">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
