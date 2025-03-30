import BusCard from '@/components/bus-card';
import Header from '@/components/header';
import SearchBus from '@/components/search';
import Service from '@/components/services';
import React from 'react';

const  Home= () => {
  return (
    <div className='m-5'>
      {/* <SearchBus/> */}
      <Service/>
      <BusCard searchQuery={''}/>
    </div>
  );
}

export default Home;
