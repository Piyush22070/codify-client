
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className=' mb-0  text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
    <footer className="bg-gray-800 text-white py-6 mt-7 h-[200px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Codify </h2>
            <p className="text-gray-400">Piyush Production</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-300">Home</Link>
            <Link href="/contest" className="hover:text-gray-300">Contest</Link>
            <Link href="/library" className="hover:text-gray-300">Library</Link>
            <Link href="/problems" className=''>Problems</Link>
          </div>
        </div>
      </div>
      
    </footer>
    <div className='flex justify-center p-2'>© 2024 All rights reserved.</div>
    </div>
  );
};

export default Footer;
