"use client";
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Reference to dropdown menu and its wrapper
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };

  // Checks if click is outside dropdown menu
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

  // First image style
  const backgroundImageStyle: React.CSSProperties = {
    backgroundImage: 'url(https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/1461adb6-5183-4a48-8346-d14d7250302c/US-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_8b32f466-39f1-47d0-ade1-7bbf83666948_small.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '75vh',
    color: 'white',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    transition: 'height 0.3s ease-in-out'
  };

  return (
    <main>
      <div style={backgroundImageStyle} className="background-container">
        {/* left side */}
        <div className="flex justify-between w-full max-w-screen-lg p-4">
          <div className="p-1 flex">
            <span className="text-2xl font-extrabold text-red-500">
              NOTFLIX
            </span>
          </div>

          {/* right side */}
          <div className="flex space-x-2 relative items-center">
            <div className="relative" ref={dropdownRef}>
              <button
                className={`text-white py-1 px-6 rounded-md bg-gray-500 hover:bg-gray-700 transition duration-300 ease-in-out ${
                  dropdownOpen ? 'border-black border-2' : ''
                }`}
                onClick={toggleDropdown}
                ref={buttonRef}
                style={{ boxSizing: 'border-box' }}
              >
                Language
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul>
                    <li>
                      <a href="#" className="block px-2 py-1 text-gray-700 hover:bg-gray-100">English</a>
                    </li>
                    <li>
                      <a href="#" className="block px-2 py-1 text-gray-700 hover:bg-gray-100">Español</a>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <button className="text-white text-sm py-1 px-3 rounded-md bg-red-500 hover:bg-red-700 transition duration-300 ease-in-out flex-shrink-0"
              style={{ height: '32px' }}>
              Sign In
            </button>
          </div>
        </div>

        {/* Getting started */}
        <div className="flex flex-col items-center w-full p-6 mt-28 text-center space-y-4">
          <h1 className="text-4xl font-bold w-full">
            Unlimited movies, TV shows, and more
          </h1>
          <h2 className="text-lg w-full">
            Watch anywhere. Cancel anytime.
          </h2>

          <form id="getStarted" className="w-full max-w-md mx-auto">
              <h3 className="text-lg flex flex-col w-full space-y-4">
                Ready to watch? Enter your email to create or restart your membership.
              </h3>
            <div className="flex w-full space-x-4 ">
              <input placeholder="Email address" className="flex-1 py-3 px-8 rounded bg-zinc-900 border" style={{ backgroundColor: 'rgba(24, 24, 27, 0.60)' }} />
              <button form="getStarted" className=" px-6 rounded-md bg-red-500 text-white hover:bg-red-700 transition duration-300 ease-in-out">
                Get Started
              </button>
            </div>
          </form>
          
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 600px) {
          .background-container {
            height: 85vh;
          }
        }
        @media (min-width: 1024px) {
          .background-container {
            height: 100vh;
          }
        }
        .text-lg {
          transition: font-size 0.3s ease-in-out;
        }
        @media (min-width: 600px) {
          .text-lg {
            font-size: 1.25rem; /* 20px */
          }
        }
        @media (min-width: 1024px) {
          .text-lg {
            font-size: 1.5rem; /* 24px */
          }
        }
      `}</style>
    </main>
  );
}
