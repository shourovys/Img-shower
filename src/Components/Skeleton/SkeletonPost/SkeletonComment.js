import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Skeleton from '../Skeleton';
import Shimmer from '../Shimmer'

const SkeletonComment = ({ theme }) => {
    const themeClass = theme || 'light';
    return (
        <div className={`skeleton-wrapper ${themeClass}`}>
            <div>
                <CardHeader className='comment-avatar'
                    avatar={<Skeleton type='round-img' />}
                    title={<Skeleton type='shot-text' />}
                />
                <CardContent style={{ paddingTop: 0 }}>
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                    <Skeleton type='text' />
                </CardContent>
            </div>
            <Shimmer />
        </div>
    );
};

export default SkeletonComment;