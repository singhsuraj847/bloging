import React, {useState, useEffect} from 'react'
import { getRecentPosts } from '../services';
import { RecentCard } from '../components'

const RecentPost = () => {
    const [recentPost, setRecentPost] = useState([]);

    useEffect(() => {
        getRecentPosts().then((result) => {
            setRecentPost(result);
        })
    }, [])
    return (
        <>
            <div className="recent-post-wrapper">
                {recentPost.map((post, index) => (
                    <RecentCard post={post} key={index}/>
                ))}
            </div>
        </>
    )
}

export default RecentPost
