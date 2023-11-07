import React from 'react'
import { LeftBarHeader } from './LeftBarHeader'
import { LeftBarMenu } from './LeftBarMenu'

export const LeftBar = () => {
  return (
    <div className='w-64 flex flex-col gap-5 shrink-0'><LeftBarHeader />
      <LeftBarMenu />
    </div>
  )
}
