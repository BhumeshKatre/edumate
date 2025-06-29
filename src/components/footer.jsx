import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200  py-8 text-center">
      <div className="">
        <span className="font-bold text-lg tracking-wide">EduMate</span>
      </div>
     
      <div className="text-sm text-gray-400">
        &copy; {new Date().getFullYear()} EduMate. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
