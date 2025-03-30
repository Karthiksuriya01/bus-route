"use server"

import React from 'react';
import { LoginFormSchema } from '../../lib/rules';
import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';
import User from '@/app/model/User';
import { createSession } from '@/lib/session';

const login = async (state, formData) => {
  
  const validateFields = LoginFormSchema.safeParse({
    number: formData.get('number'),
    password: formData.get('password'),
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,

    };
  }
  
  try
  {
        await connectDB()
        const user = await User.findOne({number: validateFields.data.number})
        if(!user)
        {
          return {
            errors: {
              general: ['Invalid credentials']
            }
          }
        }
        const isPasswordValid = await bcrypt.compare(
            validateFields.data.password,
            user.password
        )
      
        if (!isPasswordValid) {
            return {
              errors: {
                password: "Invalid password"
              }
            }
        }

        await createSession(user._id.toString())

        return { 
            success: true,
            message: 'Login successful!',
            user: {
              id: user._id.toString(),
              number: user.number
            }
        };
        
  }catch(err)
  {
    console.log(err);
    return {
      errors: {
        general: ['Login failed. Please try again.']
      }
    }
  }
}

export default login;
