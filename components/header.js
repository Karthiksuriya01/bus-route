"use client"
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-white shadow-sm">
      <div className="flex items-center">
        <Image 
          src="/logo.png"
          alt="Bus Tracking Logo"
          width={40}
          height={40}
          className="object-contain"
        /><h1 className='text-3xl font-semibold mx-0.5'>BusMate</h1>
      </div>
    </header>
  );
}

export default Header;
