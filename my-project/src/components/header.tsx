'use client'
import { useState } from "react";
import Image from "next/image";

export default function Header() {
  // State to toggle the mobile menu
  const [isOpen, setIsOpen] = useState(false);

  // Function to handle the menu toggle
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center bg-custom-pink px-20 py-7">
      {/* Logo */}
      <div className="cursor-pointer">
        <Image src="/logo.png" width={100} height={100} alt="Logo" />
      </div>

      {/* Regular Navigation for Medium and Large Screens */}
      <nav className="hidden md:flex">
        <ul className="flex gap-8 font-medium cursor-pointer">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </nav>

      {/* Right Section for Medium and Large Screens */}
      <div className="hidden md:flex items-center gap-8 text-custom-pink">
        <ul className="flex gap-8 items-center">
          <li className="cursor-pointer">
            <Image src="/search.svg" alt="Search Icon" width={24} height={24} />
          </li>
          <li className="cursor-pointer">
            <Image src="/user.png" alt="User Icon" width={24} height={24} />
          </li>
          <button className="bg-black text-white px-6 py-2 font-medium rounded-lg">
            Sign up
          </button>
        </ul>
      </div>

      {/* Hamburger Icon for Small Screens Only */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu for Small Screens Only */}
      {isOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-custom-pink text-white p-4 z-50">
          <ul className="flex flex-col gap-4 items-center font-medium cursor-pointer">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
            <li className="flex gap-4">
              <Image src="/search.svg" alt="Search Icon" width={24} height={24} />
              <Image src="/user.png" alt="User Icon" width={24} height={24} />
            </li>
            <button className="bg-black text-white px-6 py-2 font-medium">
              Sign up
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
}
