import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => (
    {
        cont: {
            marginTop: theme.spacing(6),
            maxWidth: 345,
        },
        avatar: {
            padding: theme.spacing(1),
            height: theme.spacing(4),
            width: theme.spacing(4)
        },
        img: {
            display: "inlineblock"
        },
        card: {

            width: '300px'
        },
        cardActionArea: {
            height: '100%'
        },
        cardMedia: {
            height: '300px',
            
        }
    }
))