"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
    <div className =" bg-gray-800 text-white p-2">
      <ul className=" hidden w-[70%] md:flex items-center justify-evenly">
        <li><Link href="/" className="hover:bg-gray-700 p-2 rounded">Home</Link></li>
        <li><Link href="/problems" className="hover:bg-gray-700 p-2 rounded">Problems</Link></li>
        <li><Link href="/contest" className="hover:bg-gray-700 p-2 rounded">Contest</Link></li>
        <li><Link href="/library" className="hover:bg-gray-700 p-2 rounded">library</Link></li>
      </ul>

      <button onClick={toggleMenu}className=" right: 0 md:hidden p-2 bg-gray-700 rounded">Menu</button>
      {isOpen && (
        <div className="absolute top-30 flex left-0 w-full bg-gray-800 text-white md:hidden">
          <ul className="flex flex-col p-5 gap-4">
          <li><Link onClick={toggleMenu} href="/" className="hover:bg-gray-700 p-2 rounded">Home</Link></li>
          <li><Link onClick={toggleMenu} href="/problems" className="hover:bg-gray-700 p-2 rounded">Problems</Link></li>
          <li><Link onClick={toggleMenu} href="/contest" className="hover:bg-gray-700 p-2 rounded">Contest</Link></li>
          <li><Link onClick={toggleMenu} href="/library" className="hover:bg-gray-700 p-2 rounded">library</Link></li>
          </ul>
        </div>
      )}
    </div>
    </div>
  );
};

export default Navbar;
