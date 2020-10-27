import React from 'react';
import '../../Card/Card.css'
import Shimmer from '../Shimmer';
import Skeleton from '../Skeleton';
import '../SkeletonComponents.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import '../SkeletonComponents.css'
import { useStyles } from '../../MaterialStyle/MaterialStyle'

const SkeletonCard = ({ theme }) => {
    const classes = useStyles();

    const themeClass = theme || 'light';

    return (
        <div
            className={`skeleton-wrapper ${themeClass}`}
            style={{ overflow: 'visible' }}
        >
            <Card className={classes.root} >
                <CardHeader
                    avatar={<Skeleton type='round-img' />}
                    action={
                        <div
                            className='skeletonColour'
                            style={{ paddingTop: 24 }}>
                            <MoreVertIcon />
                        </div>
                    }
                    title={<Skeleton type='shot-text' />}
                    subheader={<Skeleton type='shot-text' />}
                />

                <CardMedia className='card-img'>
                    <Skeleton type='square-img' />
                </CardMedia>

                <CardContent>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p">
                        <Skeleton type='text' />
                        <Skeleton type='text' />
                    </Typography>
                </CardContent>

                <CardActions
                    style={{ padding: 16 }}
                >
                    <div
                        className='skeletonColour'
                    >
                        <FavoriteIcon />
                    </div>
                    <div
                        className='skeletonColour'
                    >
                        <ShareIcon />
                    </div>
                </CardActions>

            </Card>

            <Shimmer />
        </div>
    );
};

export default SkeletonCard;
