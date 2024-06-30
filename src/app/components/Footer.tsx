import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className=' mb-0 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
    <footer className="bg-black text-white h-[200px] p-5">
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
        <div className='flex justify-end items-end flex-col py-8'>
        <ul className=' flex flex-row gap-6 p-3'>
          <li><Link href="https://www.linkedin.com/in/piyush-bhoyar-b130a6256/"><Image src="/images/links/linden.png"alt='linkden'height={50} width={40} /></Link></li>
          <li><Link href="https://github.com/Piyush22070"><Image src="/images/links/git.jpg"alt='github'height={50} width={40} /></Link></li>
          <li><Link href="https://x.com/piyushbhoyar131"><Image src="/images/links/twiter.webp"alt='Twiter'height={50} width={40} /></Link></li>
          <li><Link href="https://www.instagram.com/_piyush_bhoyar/"><Image src="/images/links/insta.jpg"alt='insta'height={50} width={40} /></Link></li>
        </ul>
        </div>
      </div>
      
    </footer>
    <div className='flex justify-center p-2 text-white bg-black'>© 2024 All rights reserved.</div>
    </div>
  );
};

export default Footer;
