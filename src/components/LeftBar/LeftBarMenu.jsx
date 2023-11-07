import React from 'react'
import { AiFillHome } from 'react-icons/ai'
export const LeftBarMenu = () => {
    const menuItems = [
        'Home', 'Podcasts', 'Video', 'tags', 'faq', 'about', 'contact', 'guides'
    ]
    const otherItems = ['Code of conduct', 'Privacy', 'Terms of use']
    const populaTags = ['webdev', 'js', 'programming', 'beginner', 'tutorial', 'react']
    const socialIcons = ['1', '2', '3', '4', '5', '6']
    return (
        <div className='flex flex-col gap-3'>
            {
                menuItems.map((item) => {
                    return <div key={item} className='flex items-center gap-2'>
                        <AiFillHome />
                        <p>{item}</p>
                    </div>
                })
            }
            <p className='font-bold'>Other</p>
            {
                otherItems.map((item) => {
                    return <p key={item}>{item}</p>
                })
            }
            <div className="flex text-xl gap-3">
                {
                    socialIcons.map((item) => {
                        return <div key={item}><AiFillHome /></div>
                    })
                }
            </div>

            <p className='font-bold'>Popular Tags</p>
            {
                populaTags.map((item) => {
                    return <p key={item}>#{item}</p>
                })
            }
        </div>
    )
}
