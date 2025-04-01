import React from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
  } from "@/components/ui/drawer"
import { Button } from './ui/button';
import { HelpCircle } from 'lucide-react';
  
const DrawerDialog = () => {
  return (
    <div className='mx-40'>
      <Drawer defaultOpen> {/* Ensure direction is set */}
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <div className="flex items-center gap-2">
              <Button>
                <HelpCircle />
                Help
              </Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default DrawerDialog;
