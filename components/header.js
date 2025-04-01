"use client"
import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full flex items-center p-4 shadow-sm z-50 bg-white">
      <div className="flex items-center rounded-sm border-none shadow-2xl bg-amber-700 overflow-hidden">
        <Image 
          src="/logo.png"
          alt="Bus Tracking Logo"
          width={35}
          height={35}
          className="object-contain"
        />
      </div>
        <h1 className='text-3xl font-semibold mx-0.5'>BusMate</h1>
    </header>
  );
}

export default Header;
