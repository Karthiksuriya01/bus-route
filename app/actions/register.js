"use server"

import React from 'react';

import connectDB from '@/lib/db';
import bcrypt from 'bcryptjs';
import User from '@/app/model/User';
import { RegisterFormSchema } from '@/lib/rules';

const register = async (state, formData) => {
  
  const validateFields = RegisterFormSchema.safeParse({
    number: formData.get('number'),
    password: formData.get('password'),
    confirmPassword: formData.get('confirmPassword')
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,

    };
  }
  
  try
  {
        await connectDB()
        const hashedPassword = await bcrypt.hash(validateFields.data.password, 10);
        const existingUser = await User.findOne(
          {
            number: validateFields.data.number
          }
        )
        if (existingUser)
        {
          return {
            errors: {
              number: "User already exists"
            }
          }
        }

        const newUser = await User.create({
          number:  validateFields.data.number,
          password: hashedPassword,
        })
        // Create session after successful registration
        await createSession(newUser._id.toString())
        return { 
          success: true,
          message: 'Registration successful!'
        };
  }catch(err)
  {
    console.log(err);
    return {
      errors: {
        general: ['Registration failed. Please try again.']
      }
    }
  }
}

export default register;
