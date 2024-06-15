"use client"
// import { useState } from "react"
// import Link from "next/link"
// export default function Navbar(){

//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//       setIsOpen(!isOpen);
//     };

//     return <div className=" bg-slate-700">
//         <div>
            
//             <ul className = {`flex items-center justify-evenly md:flex-row flex-col text-white p-2 md:w-[60%] font-sans gap-6`}>

//                 <li><Link className=" hover:text-gray-400" href="/">Home</Link></li>
//                 <li><Link className=" hover:text-gray-400" href="/problems">Problems</Link></li>
//                 <li><Link className=" hover:text-gray-400" href="contest">Contest</Link></li>
//                 <li><Link className=" hover:text-gray-400" href="library">Library</Link></li>
//             </ul>
//             {isOpen ? <button onClick={toggleSidebar}>Close</button> : <button onClick={toggleSidebar}>Menu</button>}
//     </div>
// </div>
// }
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
    <div className ="bg-gray-800 text-white p-2">
      <ul className="hidden md:flex  w-[70%] flex items-center justify-evenly">
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
