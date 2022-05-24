import React from 'react';
import {Grid, Typography} from '@material-ui/core';

const Footer = () => {
    return (
        <div id="footer">
            <footer>
                <Grid  style={{backgroundColor: "#5e35b1", height: "50px"}}>
                    <Typography align="center" style={{paddingTop: "10px"}}>
                        Made with ❤️ by Aditya Chavan
                    </Typography>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer;