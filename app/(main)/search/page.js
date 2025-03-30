"use client"
import BusCard from '@/components/bus-card';
import SearchBus from '@/components/search';
import React, { useState } from 'react';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className='m-5'>
      <SearchBus onSearch={handleSearch} />
      <BusCard searchQuery={searchQuery} />
    </div>
  );
}

export default Search;
