import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BlueButton } from './Buttons/BlueButton'
export const Navbar = () => {
    return (
        <div className='w-full flex bg-white border border-b-gray-300 justify-center items-center px-2 py-2'>
            <div className=' w-full max-w-[1200px]'>
                <div className='flex justify-between items-center'>
                    <div className="flex gap-6">
                        <div className='bg-black px-3 font-semibold py-2 text-lg rounded text-white'>DEV</div>
                        <div className='relative w-96 rounded border-gray-200 border-2'>
                            <input type="text" placeholder='Search....' className='w-full  h-full px-2' />
                            <div className='absolute top-2 right-4 text-2xl'>
                                <BiSearch />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6 items-center">
                        <p>Log In</p>
                        <BlueButton title='Create Account'/>
                    </div>
                </div>
            </div>
        </div>
    )
}
