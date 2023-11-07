import React from 'react'
import { Discuss } from './Discuss'
import { OtherItems } from './OtherItems'

export const RightBar = () => {
    const discussItems = [{
        title: "Do You Have Any Tips for Crushing Coding Interviews?",
        comments: "4"
    },
    {
        title: "Do You Have Any Tips for Crushing Coding Interviews?",
        comments: "4"
    },
    {
        title: "Do You Have Any Tips for Crushing Coding Interviews?",
        comments: "4"
    },
    {
        title: "Do You Have Any Tips for Crushing Coding Interviews?",
        comments: "4"
    },
    {
        title: "Data ethics in ai",
        comments: "42"
    }
    ]
    const trending = [
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
        '44 React Frontend Interview Questions',
    ]
    const recent = ['Javascript range', 'Javascript range', 'Javascript range', 'Javascript range']
    return (
        <div className=' flex flex-col gap-5 shrink-0 w-80'>
            <Discuss title='discuss' items={discussItems} />
            <Discuss title='watercooler' items={discussItems} />
            <Discuss title='hacktoberFest23' items={discussItems} />
            <OtherItems title='trending guides/resources' data={trending} />
            <OtherItems title='recently querried' data={recent} />
        </div>
    )
}
