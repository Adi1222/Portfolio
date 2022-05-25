import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => (
    {
        container: {
            minHeight: `calc(100vh - ${theme.spacing(2)}px)`
            
        },
        avatar: {
            padding: theme.spacing(2),
            width: theme.spacing(8),
            height: theme.spacing(8)
        },
        title: {
            marginTop: theme.spacing(0),
            marginBottom: theme.spacing(2)
        },
        img: {
            display: "inlineblock"
        }
    }
))