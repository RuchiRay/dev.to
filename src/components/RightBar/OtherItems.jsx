import React from 'react'

export const OtherItems = ({ title, data }) => {
    return (
        <div>
            <p className='font-bold mb-3'>{title}</p>
            <div className="flex pl-3 flex-col gap-3">
                {
                    data.map((item, index) => {
                        return <p className='text-gray-500' key={index}>{item}</p>
                    })
                }
            </div>

        </div>
    )
}
