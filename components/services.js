import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Bus, TrendingDownIcon, TrendingUpIcon } from "lucide-react"
import { Badge } from './ui/badge';
const Service = () => {
  return (
    <div className='my-5'>
        <h1>Explore Service</h1>
        <div className='grid grid-cols-2 gap-4'>
            <Card className={'text-white bg-black w-full'}>
                <CardHeader>
                    <CardTitle>See Bus Routes</CardTitle>
                    <CardDescription>View the Bus Routes</CardDescription>
                    </CardHeader>
                <CardContent>
                        <Bus size={64} />
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
            <Card className={'text-white bg-black'}>
                <CardHeader>
                    <CardTitle>See Bus Routes</CardTitle>
                    <CardDescription>View the Bus Routes</CardDescription>
                    </CardHeader>
                <CardContent>
                        <Bus size={64} />
                </CardContent>
                {/* <CardFooter>
                    <p>Card Footer</p>
                </CardFooter> */}
            </Card>
        </div>
        
    </div>
  );
}

export default Service;
