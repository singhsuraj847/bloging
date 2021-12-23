import React from 'react'
import Link from 'next/link';
import moment from 'moment';

const RecentCard = ({post}) => {
    return (
        <>
        <div className="mesonry-post transition ease-in-out delay-150" style={{backgroundImage: `url(${post.featured.url})`}}>
            
            <h1 className='image-title'>
                <Link href={`/post/${post.slug}`}>
                    {post.title}
                </Link>
            </h1>

            <div class="image-text">
                <p>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
                    </span>
                </p>
                <p>{post.excerpt}</p>
                <span className='post-btn'>
                    <Link href={`/post/${post.slug}`}>
                        Continue Reading
                    </Link>
                </span>
            </div>
        </div>
        </>
    )
}

export default RecentCard
