"use client"
import Image from 'next/image';
import React from 'react';
import GeoLocation from './geolocation';

const Header = () => {
  return (
    <header className="fixed w-full flex justify-between items-center p-4 shadow-sm z-50 bg-white">
      <div className="flex justify-between items-center rounded-sm border-none shadow-2xl overflow-hidden">
        <Image 
          src="/logo.png"
          alt="Bus Tracking Logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <h1 className='text-3xl font-semibold mx-0.5'>BusMate</h1>
      </div>
      <div>
      {/* <GeoLocation/> */}
      </div>
    </header>
  );
}

export default Header;
