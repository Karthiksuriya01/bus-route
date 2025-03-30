'use client'

import { Label } from '@radix-ui/react-label';
import React, { useActionState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FcGoogle } from "react-icons/fc";
import register from '../../app/actions/register';
import { undefined } from 'zod';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [state, action, isPending] = useActionState(register, undefined)
  const router = useRouter()

  useEffect(() => {
    if (state?.success) {
      router.push('/login')
    }
  }, [state?.success, router])

  return (
    <div>
      <form action={action}>
        {/* Show success message */}
        {state?.success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            {state.message}
          </div>
        )}
        {/* Show general error */}
        {state?.errors?.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {state.errors.general}
          </div>
        )}
        <div className="flex flex-col gap-6">
          <div className="grid gap-3">
            <Label htmlFor="number">Mobile number <span className='text-red-500'>*</span></Label>
            <Input 
            name="number"
            id="number" 
            type="number"
            placeholder="+91 94 XX XX XX XX" 
            required />
            {state?.errors?.number && <span className="text-red-500">{state.errors.number}</span>}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="password">Password <span className='text-red-500'>*</span></Label>
            <Input 
            name="password"
            id="password" type="password" placeholder="Enter your password" required />
            {state?.errors?.password && <span className="text-red-500">{state.errors.password}</span>}
          </div>
          <div className="grid gap-3">
            <Label htmlFor="confirmPassword">Confirm Password <span className='text-red-500'>*</span></Label>
            <Input 
            name="confirmPassword"
            id="confirmPassword"
            type="password" placeholder="Enter your password" required />
          </div>
          {state?.errors?.confirmPassword && <span className="text-red-500">Passwords doesnot match</span>}
          <div className="flex flex-col gap-3">
            <Button type="submit" disabled={isPending} className="w-full hover:cursor-pointer">
              {isPending ? "Loading..." : "Register"}
            </Button>
            
            <Button variant="outline" className="w-full bg-none border-l-white text-black hover:cursor-pointer">
              <FcGoogle /> Register with Google
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
