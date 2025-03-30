"use client"
import React from 'react';
import busdata from '@/data/dummy';
import rootes from '@/data/routes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const BusCard = ({ searchQuery }) => {
  const filteredBuses = busdata.filter(bus => 
    bus.busNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rootes.find(route => route.ID === bus.start)?.Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    rootes.find(route => route.ID === bus.end)?.Name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1>Buses</h1>
      <div>
        {filteredBuses.map(bus => {
          const start = rootes.find(route => route.ID === bus.start);
          const end = rootes.find(route => route.ID === bus.end);
          
          return (
            <Link href={`/bus/${encodeURIComponent(bus.busNumber)}`} key={bus.busNumber}>
              <Card className={'bg-amber-500 flex flex-row justify-between items-center align-middle hover:cursor-pointer my-5'}>
                <CardHeader className={'w-full'}>
                  <CardTitle className={'text-3xl'}>{bus.busNumber}</CardTitle>
                  <CardDescription className={'text-white'}>{start.Name} - {end.Name}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ArrowUpRight/>
                </CardContent>
              </Card>
            </Link>
          );
        })}
        {filteredBuses.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No buses found matching your search
          </div>
        )}
      </div>
    </div>
  );
}

export default BusCard;