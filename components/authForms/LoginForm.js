'use client'

import { Label } from '@radix-ui/react-label';
import React, { useActionState, useEffect } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import * as z from "zod"
import { FcGoogle } from "react-icons/fc";
import login from '@/app/actions/login';
import { useRouter } from 'next/navigation';


const LoginForm = () => {

   const [state,action,isPending] = useActionState(
    login,undefined
   )
   const router = useRouter()
   useEffect(() => {
    if (state?.success) {
      router.push('/home')
    }
  }, [state?.success, router])
   return (
    <div>
      <form action={action}>
      {state?.errors?.general && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {state.errors.general}
          </div>
        )}

        <div className="flex flex-col gap-6">

          {/* mobile number */}
          <div className="grid gap-3">
            <Label htmlFor="number">Mobile number <span className='text-red-500'>*</span></Label>
              <Input 
                id="email"
                name = "number" 
                type="number" 
                placeholder="+9194XX XX XX XX" 
                required />  
          {state?.errors?.number && (
              <span className="text-red-500">{state.errors.number}</span>
            )}
          </div>
          {/* // by default, form inputs return strings even for type="number". that why we write valueAsNumber: true converts the string input to an actual number  */}

          {/* password */}
          <div className="grid gap-3">
            <Label htmlFor="password">Password <span className='text-red-500'>*</span></Label>
              <Input 
                name = "password"
                id="password" type="password" placeholder="Enter your password" required />
          {state?.errors?.password && (
              <span className="text-red-500">{state.errors.password}</span>
            )}
          </div>
          <div className="flex items-center">
            <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="flex flex-col gap-3">
          <Button type="submit" disabled={isPending} className="w-full hover:cursor-pointer">
              {isPending ? "Loading..." : "Login"}
            </Button>
          </div>
        </div>
      </form>
      <div className="flex flex-col gap-3 my-5">
          <Button variant="outline" className="w-full bg-none border-l-white text-black hover:cursor-pointer">
              <FcGoogle /> Login with Google
            </Button>
      </div>
    
    </div>
  );
}

export default LoginForm;
