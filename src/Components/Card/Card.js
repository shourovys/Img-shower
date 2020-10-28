import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { useHistory } from 'react-router-dom';
import { useStyles } from '../MaterialStyle/MaterialStyle'
import SkeletonCard from '../Skeleton/SkeletonCard/SkeletonCard';

//vai card ar import name same na..tau import korsa kano?
export default function RecipeReviewCard({ post }) {
    const classes = useStyles();

    const history = useHistory()
    const { id, updated_at, description, alt_description, urls: { regular }, likes, user: { name, profile_image: { medium } } } = post;
    const postDate = updated_at.split('T')


    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar alt={name} src={medium} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title={name}
                    subheader={postDate[0]}
                />
                <CardMedia
                    onClick={() => history.push(`/post/${id}`)}
                    className={classes.media}
                    image={regular}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description || alt_description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        {likes}
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </>
    );
}