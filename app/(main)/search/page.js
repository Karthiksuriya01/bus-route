"use client"
import BusCard from '@/components/bus-card';
import Header from '@/components/header';
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='m-5'>
      <Header onSearch={handleSearch} />
      <BusCard searchQuery={searchQuery} />
    </div>
  );
}

export default Search;
