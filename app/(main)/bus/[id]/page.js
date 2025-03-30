"use client"

import React from 'react';
import busdata from '@/data/dummy'; 
import rootes from '@/data/routes'; 
import { LucideArrowLeft, LucideArrowRight, Router, Search } from 'lucide-react';
import { useRouter } from 'next/navigation';

const BusDetail = ({params}) => {
   const {id} = React.use(params) 
   const router = useRouter();
//    const busId = Number(id)

    const bus = busdata.find(b => b.busNumber === decodeURIComponent(id)); 

  if (!bus) {
    return <div>Bus not found</div>;
  }

  const startStop = rootes.find(route => route.ID === bus.start);
  const endStop = rootes.find(route => route.ID === bus.end);

  return (
    <div>
      <div className='bg-blue-600 w-full h-20 flex flex-row justify-between align-middle p-5'>
        <div className='self-center cursor-pointer'>
          <LucideArrowLeft onClick={() => router.back()}/>
        </div>
        <div className='flex flex-col justify-center align-middle text-white font-semibold'>
          <h1>Bus Number: {bus.busNumber}</h1>
          <div className='flex flex-row items-center justify-center text-xs font-light'>
              {startStop ? startStop.Name : "Unknown"} <LucideArrowRight/> {endStop ? endStop.Name : "Unknown"}
          </div>
        </div>
        
        <div className='self-center'>
          <Search/>
        </div>
      </div>
      <div className='m-5'>

      <h3>Stops:</h3>
      <ul>
        {bus.stops.map((stopId, index) => {
          const stop = rootes.find(route => route.ID === stopId);
          return (
            <li key={index}>{stop ? stop.Name : "Unknown Stop"}</li>
          );
        })}
      </ul>
      </div>
    </div>
  );
}

export default BusDetail; 