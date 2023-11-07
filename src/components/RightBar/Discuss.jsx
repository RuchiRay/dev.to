import React from 'react'

export const Discuss = ({ items, title }) => {

    return (
        <div className='bg-white border  flex flex-col gap-3 rounded-md border-gray-200'>
            <p className="p-4 font-bold border-b border-b-gray-200 ">#{title}</p>
            <div className="flex flex-col">
                {
                    items.map((item, index) => {
                        return <div className='p-3 border border-l-0 border-r-0 border-t-0  border-b-gray-100' key={index}>
                            <p className='text-base text-gray-500'>{item.title}</p>
                            <p className='text-sm text-gray-400'>{item.comments} comments</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
