import React from 'react'
import Image from 'next/image'

const Author = ({author}) => {
    return (
        <div className='text-center shadow-lg ml-20 mt-20 mb-8 mr-20 p-12 relative rounded-lg bg-white relatedPost'>
            <div className='absolute left-0 right-0 -top-14'>
                <Image
                alt={author.name}
                unoptimized
                height="100px"
                width="100px"
                className="align-middle rounded-full"
                src={author.photo.url}
             />
            </div>
            <h3 className='text-black my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-black text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author