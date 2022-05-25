import React from 'react';
import {Grid, Typography, useTheme} from '@material-ui/core';
import { useThemeMode } from '../../Hooks/ThemeContext';

const Footer = () => {
    const theme = useTheme();

    const {darkMode, toggleTheme} = useThemeMode();
    

    return (
        <div id="footer">
            <footer>
                <Grid  style={{backgroundColor: '#283593' , height: "50px"}}>
                    <Typography align="center" style={{paddingTop: "10px"}}>
                        Made with ❤️ by Aditya Chavan
                    </Typography>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer;