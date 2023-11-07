import React from 'react'
import { Navbar } from '../components/Navbar'
import { LeftBar } from '../components/LeftBar/LeftBar'
import { RightBar } from '../components/RightBar/RightBar'
import { Feed } from '../components/Feed/Feed'

export const HomePage = () => {
    return (
        <div className='w-full flex flex-col items-center bg-gray-100'>
            <Navbar />
            <div className="flex w-full gap-5 mt-3 max-w-[1200px]">
                <LeftBar />
                <Feed />
                <RightBar />
            </div>
        </div>
    )
}
