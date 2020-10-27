import React, { useCallback, useEffect, useMemo, useState } from 'react';
import './Post.css'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CommentsContainer from '../CommentsContainer/CommentsContainer';



const Post = ({ thisPostData }) => {
    const { id, updated_at, description, alt_description, urls: { full, regular, small }, likes, user: { name, profile_image: { medium } } } = thisPostData;
    const postDate = updated_at.split('T')

    const PostIdGenerator = () => Math.floor(Math.random() * 100);
    const postId = useMemo(() => PostIdGenerator(), id)

    const [windowWidth, setWindowWidth] = useState(null)
    useEffect(() => {
        window.addEventListener("resize", setWindowWidth(window.innerWidth));
    }, [])

    return (
        <>
            <div className='post'>
                <div className="post-info">
                    <CardHeader
                        avatar={
                            <Avatar alt="Remy Sharp" src={medium} />
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={name}
                        subheader={postDate[0]}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description || alt_description}
                        </Typography>
                        {
                            windowWidth > 600 &&
                            <CommentsContainer postId={postId} />
                        }
                    </CardContent>
                </div>
                <div className="full-img-container">
                    <img className="full-img" src={full || regular || small} />
                </div>
            </div>
            {
                windowWidth < 600 &&
                <CommentsContainer postId={postId} />
            }
        </>
    );
};

export default Post;