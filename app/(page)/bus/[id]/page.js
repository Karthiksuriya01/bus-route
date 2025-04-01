"use client"

import React from 'react';
import busdata from '@/data/dummy'; 
import rootes from '@/data/routes'; 
import { LucideArrowLeft, LucideArrowRight, Search, Circle, BusFront, HelpCircle, HelpCircleIcon, BadgeHelpIcon, HelpingHandIcon, HelpingHand } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const BusDetail = ({params}) => {
   const {id} = React.use(params) 
   const router = useRouter();

   const bus = busdata.find(b => b.busNumber === decodeURIComponent(id)); 

  if (!bus) {
    return <div>Bus not found</div>;
  }

  const startStop = rootes.find(route => route.ID === bus.start);
  const endStop = rootes.find(route => route.ID === bus.end);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className='fixed top-0 left-0 right-0 z-50 bg-blue-600 w-full h-20 flex flex-row justify-between align-middle p-5'>
        <div 
          className='self-center cursor-pointer hover:opacity-75'
          onClick={() => router.back()}
        >
          <LucideArrowLeft className='bg-white rounded-full p-1 w-8 h-8'/>
        </div>
        <div className='flex flex-col justify-center align-middle text-white'>
          <div className='flex flex-row justify-center '>
            <BusFront/>
            <h1 className="text-xl font-bold">{bus.busNumber}</h1>
          </div>
          <div className='flex flex-row items-center justify-center text-sm'>
            {startStop?.Name} <LucideArrowRight className="mx-2 w-4 h-4"/> {endStop?.Name}
          </div>
        </div>
        <div className='self-center'>
          <Link href={'/search'}>
          <Search className="text-white"/></Link>
        </div>
      </div>

      {/* Bus Stops Timeline */}
      <div className='mx-5 mt-20'>
        <h3 className="text-lg font-semibold mb-4">Bus Stops</h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-2 top-0 w-1 h-full bg-blue-700 z-10" />
          
          {/* Stops */}
          <div className="space-y-8 mx-0.5 mb-5">
            {bus.stops.map((stopId, index) => {
              const stop = rootes.find(route => route.ID === stopId);
              const isFirst = index === 0;
              const isLast = index === bus.stops.length - 1;
              
              return (
                <div key={stopId} className="flex items-center">
                  <Circle 
                    className={`w-4 h-4 z-10 ${isFirst || isLast ? 'text-blue-600' : 'text-gray-400'}`} 
                    fill={isFirst || isLast ? 'currentColor' : 'white'}
                  />
                  <div className="ml-6">
                    <h4 className="font-medium text-gray-900">{stop?.Name}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Button 
        className="fixed right-4 bottom-4 p-6 w-13 bg-blue-600 hover:bg-blue-700 shadow-lg z-50"
        aria-label="Help"
      >
        <HelpCircle />
      </Button>    </div>
  );
}

export default BusDetail;