import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { Button } from './ui/button';
  
const DrawerDialog = () => {
  return (
    <div className='mx-40'>
      <Drawer>
  <DrawerTrigger>Open</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you absolutely sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>

    </div>
  );
}

export default DrawerDialog;
