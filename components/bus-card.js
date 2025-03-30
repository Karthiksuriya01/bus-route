"use client"
import React from 'react';
import busdata from '@/data/dummy';
import rootes from '@/data/routes';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
const BusCard = () => {
  return (
    <div>
        <h1>Buses</h1>
        <div>
        {
            busdata.map(bus => {
                const start = rootes.find(route => route.ID === bus.start);
                const end = rootes.find(route => route.ID === bus.end);
                console.log(start);
                return (
                <Link href={`/bus/${encodeURIComponent(bus.busNumber)}`} key={bus.busNumber}>

                    <Card key={bus.busNumber} className={'bg-amber-500 flex flex-row justify-between items-center align-middle hover:cursor-pointer my-5'}>
                        <CardHeader className={'w-full'}>
                            <CardTitle className={'text-3xl'}>{bus.busNumber}</CardTitle>
                            <CardDescription className={'text-white'}>{start.Name} - {end.Name}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ArrowUpRight/>
                        </CardContent>
                        {/* <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter> */}
                    </Card>
                </Link>
                )
                // <div key={bus.id}>{bus.busNumber}</div>
              })
        }
        </div>
        
      
        

    </div>
  );
}

export default BusCard;



/* {busdata.map(bus => {
        const start = rootes.find(route => route.ID === bus.start);
        const end = rootes.find(route => route.ID === bus.end);
        console.log(start);
        return (
            <div key={bus.id} className='flex justify-between p-2 border-b border-gray-200'>
                <div className='flex flex-col'>
                    <div className='text-lg'>{bus.busNumber}</div>
                    <div className='text-sm'>{start.Name} - {end.Name}</div>
                </div>
            </div>
        )
        // <div key={bus.id}>{bus.busNumber}</div>
      })} */