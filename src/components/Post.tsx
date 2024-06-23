import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Image src="https://images.pexels.com/photos/14664613/pexels-photo-14664613.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="avatar" width={40} height={40} className="w-10 h-10 rounded-full" />
                <span>Priya</span>
            </div>
            <Image src="/more.png" alt="dots" width={16} height={16} />
        </div>
        <div className="flex flex-col gap-4">
            <div className="w-full min-h-96 relative">
                <Image src="https://images.pexels.com/photos/20876214/pexels-photo-20876214/free-photo-of-a-woman-in-a-coat-standing-on-a-cliff.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='post' fill className='object-cover rounded-md' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quo sed itaque hic optio illum quidem quis aut, aliquid impedit perferendis inventore?</p>
        </div>
        <div className="flex items-center justify-between text-sm mt-4">
            <div className="flex gap-8">
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl">
                    <Image src="/like.png" alt='like' height={16} width={16} className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>221<span className='hidden md:inline'> Likes</span></span>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl">
                    <Image src="/comment.png" alt='like' height={16} width={16} className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>221<span className='hidden md:inline'> Comments</span></span>
                </div>
            </div>
            <div>
                <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-xl">
                    <Image src="/share.png" alt='like' height={16} width={16} className='cursor-pointer' />
                    <span className='text-gray-300'>|</span>
                    <span className='text-gray-500'>221<span className='hidden md:inline'> Shares</span></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post