import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => (
    {
        cont: {
            minHeight: `calc(100vh - ${theme.spacing(2)}px)`,
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
            padding: '1.1rem',
            justifyContent: 'center',
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: "blur(7px)",
            boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
            borderRadius: 20,
            
        },
        cardActionArea: {
            height: '100%'
        },
        cardMedia: {
            height: '57px',
            width: '225px'
        }
    }
))