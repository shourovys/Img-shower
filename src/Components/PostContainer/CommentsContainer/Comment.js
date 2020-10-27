import React from 'react';
import './Comment.css'
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';

const Comment = ({ comment }) => {
    const { name, body } = comment;
    let shotName = name.split(" ")
    return (
        <>
            <CardHeader className='comment-avatar'
                avatar={
                    <Avatar alt={shotName[1]} src={'medium'} />
                }

                title={`${shotName[1]} ${shotName[2]}`}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {body}
                </Typography>
            </CardContent>
        </>
    );
};

export default Comment;