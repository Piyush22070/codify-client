"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-black flex flex-row justify-between md:justify-evenly p-2 md:items-center'>

      <div>
      <div className='flex'>
        <ul className="hidden md:flex items-center space-x-4">
          <li className='flex'>
            <Link href="/about"><Image src="/images/main-logo.png" height={50} width={80} alt={'logo'} className='hidden md:block'/></Link>
          </li>
          <li>
            <Link href="/" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
              Home
            </Link>
          </li>
          <li>
            <Link href="/problems" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
              Problems
            </Link>
          </li>
          <li>
            <Link href="/contest" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
              Contest
            </Link>
          </li>
          <li>
            <Link href="/library" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
              Library
            </Link>
          </li>
        </ul>
      </div>
      <button onClick={toggleMenu} className="md:hidden">
        <Image src={'/images/menu1.png'} alt={'menu'} width={30} height={50}/>
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 w-full bg-black text-white md:hidden z-10 py-2">
          <ul className="flex flex-col gap-3">
            <li>
              <Link onClick={toggleMenu} href="/" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/problems" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
                Problems
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/contest" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
                Contest
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href="/library" className="hover:bg-gray-700 p-2 rounded px-6 py-3 text-xs font-medium text-gray-200 uppercase tracking-wider">
                Library
              </Link>
            </li>
          </ul>
        </div>
      )}
      </div>

      <div>
      <Link href="/about">
        <Image src="/images/main-logo.png" height={35} width={60} alt={'logo'} className='md:hidden'/>
      </Link>
      </div>

      <div className='flex items-end justify-end roud' >
        <Link href="/profile">
          <Image src="/images/nominal.png" alt={'nominal'} height={50} width={40}/>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
