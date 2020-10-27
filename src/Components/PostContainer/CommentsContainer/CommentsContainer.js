import React, { useEffect, useState } from 'react';
import Comment from './Comment';
import SkeletonComment from '../../Skeleton/SkeletonPost/SkeletonComment';
import Skeleton from '../../Skeleton/Skeleton';

const CommentsContainer = ({ postId }) => {
    const [thisPostComments, setThisPostComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(res => res.json())
            .then(data => setThisPostComments(data))
            .catch(err => console.log('err', err))
    }, [])
    return (
        <>
            {
                thisPostComments.length
                    ? <p
                        style={{ marginBottom: 0 }}
                    >Comments : {thisPostComments.length}</p>

                    : <div>
                        <br />
                        <Skeleton type='title' />
                    </div>
            }

            {
                thisPostComments.length
                    ? thisPostComments.map(comment =>
                        <Comment
                            comment={comment}
                            key={comment.id}
                        />)

                    : [1, 2, 3, 4, 5].map(num =>
                        <SkeletonComment
                            key={num}
                        />)
            }
        </>
    );
};

export default CommentsContainer;