import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => (
    {
        list: {
            width: 150,
        },
        listitem:{
            
            '&:hover': {
                backgroundColor: theme.palette.type === 'light' ? '#283593' : '#4fc3f7',
                color: theme.palette.primary.contrastText,
            }
        }
    }
))