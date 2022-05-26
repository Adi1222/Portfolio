import React from 'react';
import {Grid, Typography, useTheme} from '@material-ui/core';
import { useThemeMode } from '../../Hooks/ThemeContext';

const Footer = () => {
    const theme = useTheme();

    const {darkMode, toggleTheme} = useThemeMode();
    

    return (
        <div id="footer">
            <footer>
                <Grid conatiner direction="column" alignItems="center" style={{backgroundColor: '#283593'}}>
                    <Grid item>
                        <Typography align="center" style={{paddingTop: "10px", color: "white"}}>
                            Made with ❤️ by Aditya Chavan
                        </Typography>
                    </Grid>
                    <Grid item>
                        <a href="https://github.com/Adi1222/Portfolio" target="_blank" rel="noopener noreferrer">
                            <Typography align="center" component="p"  style={{color: "white"}}>
                                ⭐ on Github
                            </Typography>
                        </a>
                    </Grid>
                </Grid>
            </footer>
        </div>
    )
}

export default Footer;