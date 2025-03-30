import BusCard from '@/components/bus-card';
import Header from '@/components/header';
import Service from '@/components/services';
import React from 'react';

const  Home= () => {
  return (
    <div className='m-5'>
      <Header/>
      <Service/>
      <BusCard/>
    </div>
  );
}

export default Home;
