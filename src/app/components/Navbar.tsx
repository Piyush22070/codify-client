"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' flex bg-slate-800' >
    <div className =" bg-gray-800 text-white p-2 flex justify-start">
      <ul className=" hidden w-[70%] md:flex items-center justify-evenly">
        <li><Link href="/" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Home</Link></li>
        <li><Link href="/problems" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Problems</Link></li>
        <li><Link href="/contest" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Contest</Link></li>
        <li><Link href="/library" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">library</Link></li>
      </ul>

      <button onClick={toggleMenu}className=" right: 0 md:hidden rounded  p-1"><Image src={'/images/menu1.png'} alt={'menu'} width={30} height={50}/></button>
      {isOpen && (
        <div className="absolute top-30 flex left-0 w-full bg-gray-800 text-white md:hidden  z-10">
          <ul className="flex flex-col p-5 gap-4">
          <li><Link onClick={toggleMenu} href="/" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Home</Link></li>
          <li><Link onClick={toggleMenu} href="/problems" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Problems</Link></li>
          <li><Link onClick={toggleMenu} href="/contest" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">Contest</Link></li>
          <li><Link onClick={toggleMenu} href="/library" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-left text-xs font-medium text-gray-200 uppercase tracking-wider">library</Link></li>
          </ul>
        </div>
      )}
      <div className=' flex md:hidden justify-end'>
        <Image src="/images/main-logo.png" height={35} width={60} alt={'logo'}/></div>
    </div>

    </div>
  );
};

export default Navbar;
