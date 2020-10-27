import React, { useEffect, useState } from 'react';
import '../../PostContainer/Post/Post.css'
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';
import CommentsContainer from '../../PostContainer/CommentsContainer/CommentsContainer';

const SkeletonPost = ({ theme }) => {
    const themeClass = theme || 'light';
    const [windowWidth, setWindowWidth] = useState(null)
    useEffect(() => {
        window.addEventListener("resize", setWindowWidth(window.innerWidth));
    }, [])

    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div className='post'>
                <div className="post-info" >
                    <CardHeader
                        avatar={
                            <Skeleton type='round-img' />
                        }
                        action={
                            <div className='skeleton-style'>
                                <MoreVertIcon />
                            </div>
                        }
                        title={
                            <Skeleton type='shot-text' />
                        }
                        subheader={<Skeleton type='shot-text' />
                        }
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            <Skeleton type='text' />
                            <Skeleton type='text' />
                            <Skeleton type='text' />
                        </Typography>
                        {
                            windowWidth > 600 &&
                            <CommentsContainer />
                        }
                    </CardContent>
                </div>
                <div className="full-img-container">
                    <div className="full-img">
                        <Skeleton type='square-full-img' />
                    </div>
                </div>
            </div>
            {
                windowWidth < 600 &&
                <CommentsContainer />
            }
            <Shimmer />
        </div>
    );
};

export default SkeletonPost;