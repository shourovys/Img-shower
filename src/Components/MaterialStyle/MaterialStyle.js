import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 451,
        minWidth: 450,
        margin: '0 1rem',
        boxShadow: '0 0 3px rgba(0,0,0,.3)'
    },
    media: {
        height: 0,
        cursor: 'pointer',
        paddingTop: '56.25%', // 16:9
        overflow: 'hidden'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },

}));