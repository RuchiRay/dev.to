import React from 'react'
import { BlueButton } from '../Buttons/BlueButton'

export const LeftBarHeader = () => {
  return (
    <div className='bg-white border p-4 flex flex-col gap-3 rounded-md border-gray-200'>
      <p className='font-bold text-xl  '>DEV Community is a community of 1,183,319 amazing developers</p>
      <p className='text-gray-500'>We're a place where coders share, stay up-to-date and grow their careers.</p>
      <BlueButton title='Create Account' />
      <p className='text-center'>Log In</p>
    </div>
  )
}
