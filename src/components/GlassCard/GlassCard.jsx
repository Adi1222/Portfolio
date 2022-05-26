import React from 'react';
import { Box } from "@material-ui/core";
import useStyles from "./styles";

const GlassCard = (props) => {
    
    const classes = useStyles();

    return (
        <Box className={classes.glass}
            {
                ...props
            }
        />
    )
}

export default GlassCard;