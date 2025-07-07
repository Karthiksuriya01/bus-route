"use client"

import React from 'react';
import busdata from '@/data/dummy';
import rootes from '@/data/routes';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { LucideArrowLeft, LucideArrowRight, Search, Circle, BusFront, HelpCircle, MapPin, Info } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from "framer-motion"
import BusMap from '@/components/bus-map';

const BusDetail = ({ params }) => {
  const { id } = React.use(params)
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
          <LucideArrowLeft className='bg-white rounded-full p-1 w-8 h-8' />
        </div>
        <div className='flex flex-col justify-center align-middle text-white gap-1'>
          <div className='flex flex-row justify-center align-middle gap-2 border-b'>
            <BusFront size={40} />
            <h1 className="text-4xl font-bold">{bus.busNumber}</h1>
          </div>
          <div className='flex flex-row items-center justify-center text-sm font-extralight'>
            {startStop?.Name} <LucideArrowRight className="mx-2 w-4 h-4" /> {endStop?.Name}
          </div>
        </div>
        <div className='self-center'>
          <Link href={'/search'}>
            <Search className="text-white" /></Link>
        </div>
      </div>

      <div className="mt-20">
        <Tabs defaultValue="route" className="w-full">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="route">
              <Circle className="w-4 h-4 mr-2" />
              Route
            </TabsTrigger>
            <TabsTrigger value="map">
              <MapPin className="w-4 h-4 mr-2" />
              Map
            </TabsTrigger>
            <TabsTrigger value="about">
              <Info className="w-4 h-4 mr-2" />
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="route" className="mx-5">
            <h3 className="text-lg font-semibold mb-4">Bus Stops</h3>
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-2 top-0 w-1 h-full rounded-xl bg-blue-700 z-10" />

              {/* Stops */}
              <div className="space-y-8 mx-0.5 mb-5">
                {bus.stops.map((stopId, index) => {
                  const stop = rootes.find(route => route.ID === stopId);
                  const isFirst = index === 0;
                  const isLast = index === bus.stops.length - 1;

                  return (
                    <div key={stopId} className="flex items-center font-extralight">
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
          </TabsContent>

          <TabsContent value="map" className="h-[calc(100vh-13rem)]">
            <BusMap />
          </TabsContent>

          <TabsContent value="about">
            <div className="mx-5">
              <h3 className="text-lg font-semibold mb-4">Bus Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Route Number</h4>
                  <p>{bus.busNumber}</p>
                </div>
                <div>
                  <h4 className="font-medium">From</h4>
                  <p>{startStop?.Name}</p>
                </div>
                <div>
                  <h4 className="font-medium">To</h4>
                  <p>{endStop?.Name}</p>
                </div>
                <div>
                  <h4 className="font-medium">Total Stops</h4>
                  <p>{bus.stops.length}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Button
        className="fixed right-4 bottom-4 p-6 w-13 bg-blue-600 hover:bg-blue-700 shadow-lg z-50 cursor-pointer"
        aria-label="Help"
      >
        <HelpCircle />
      </Button>    </div>
  );
}

export default BusDetail;
