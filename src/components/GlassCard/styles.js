import {makeStyles} from '@material-ui/core';

export default makeStyles((theme) => (
    {
        glass: {
            backgroundColor: 'rgba(255,255,255,0.2)',
            backdropFilter: "blur(7px)",
            boxShadow: "10px 10px 10px rgba(30, 30, 30, 0.1)",
            borderRadius: 20,
        }
    }
))