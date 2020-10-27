import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SkeletonPost from '../Skeleton/SkeletonPost/SkeletonPost';
import Post from './Post/Post';
import './PostContainer.css'

const PostContainer = () => {
    const { postId } = useParams()
    const [thisPostData, setThisPostData] = useState({})

    const apiKey = 'qYnjAZtToJtJAZfNwxBv6hBQrbP7xRdzqZp9nIGkdUM'
    useEffect(() => {
        fetch(`https://api.unsplash.com/photos/${postId}?client_id=${apiKey}`)
            .then(res => res.json())
            .then(data => setThisPostData(data))
    }, [postId])

    return (
        <>
            {
                thisPostData.id &&
                <Post thisPostData={thisPostData} />
            }
            {
                !thisPostData.id &&
                <SkeletonPost />
            }
        </>
    );
};

export default PostContainer;