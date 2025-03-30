"use client"
import React from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const Header = ({ onSearch }) => {
  return (
    <header className="flex justify-center flex-row items-center shadow-2xl h-12 p-3 borderbg radius-2xl">
      <Search/>
      <Input
        name="search"
        placeholder="Search for Bus Number"
        className={'border-none shadow-none'}
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
}

export default Header;
