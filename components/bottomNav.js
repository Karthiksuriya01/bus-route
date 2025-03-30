'use client';

import { Home, Wallet, Ticket, Bell, User, Bus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/home', icon: Home },
  { name: 'bus', href: '/bus', icon: Bus },
//   { name: 'Ticket', href: '/ticket', icon: Ticket },
//   { name: 'Notification', href: '/notification', icon: Bell },
//   { name: 'Profile', href: '/profile', icon: User },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center w-full h-full',
                'text-sm font-medium transition-colors',
                isActive
                  ? 'text-blue-600'
                  : 'text-gray-500 hover:text-gray-900'
              )}
            >
              <Icon
                className={cn(
                  'h-6 w-6 mb-1',
                  isActive ? 'stroke-blue-600' : 'stroke-current'
                )}
              />
              <span className="text-xs">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}