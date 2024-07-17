"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from 'react';


export default function Home() {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // reference to dropdown menu and its wrapper
    const dropdownRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  // checks if click is outside dropdown menu
  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <main >
      {/* left side */}
      <div className="flex justify-between">

        <div className=" p-1 mx-7 my-4 flex">
          <span className=" text-2xl font-extrabold text-red-500 ">
          NOTFLIX
          </span>
        </div>

        {/* right side */}
        <div className="  mx-7 my-4 p-1 flex space-x-2 relative">
          <div className="relative" ref={dropdownRef}>

            <button
              className={`text-white py-1 px-6 rounded-md bg-gray-500  ${
                dropdownOpen ? ' border-black border-2' : ''
              }`}
              onClick={toggleDropdown}
              ref={buttonRef}
              style={{ boxSizing: 'border-box' }}
            >
              Language
            </button>

            {dropdownOpen && (
              <div className="absolute flex justify-center right-0 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                <ul className="">
                  <li>
                    <a href="#" className=" px-2 py-1 text-gray-700 hover:bg-gray-100">English</a>
                  </li>
                  <li>
                    <a href="#" className=" px-2 py-1 text-gray-700 hover:bg-gray-100">Español</a>
                  </li>
                </ul>
              </div>
            )}

          </div>
            
            <button className="text-white text-sm py-1 px-3 rounded-md bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out flex-shrink-0"
            style={{ height: '32px' }}>
              Sign In</button>
        </div>

      </div>
        
        




      {/* right side */}
      <div className="flex justify-center text-7xl p-7">
        
      </div>
      

    </main>
  
  );
}
