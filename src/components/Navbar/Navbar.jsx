import React, { useContext, useEffect, useState } from 'react';
import { AppBar, Avatar, Hidden, IconButton, Link, List, ListItem, ListItemText, SwipeableDrawer, Tab, Tabs, Toolbar, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import Brightness5Icon from '@material-ui/icons/Brightness5';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MenuIcon from '@material-ui/icons/Menu';
import { ThemeContext } from '../../App';
import useStyles from "./styles"
import RightNavbar from '../RightNavbar/RightNavbar';

const Navbar = () => {

    const classes = useStyles();

    const {theme} = useContext(ThemeContext)
    const mdDown = useMediaQuery(theme.breakpoints.up('md'));
    const smDowm = useMediaQuery(theme.breakpoints.down('sm'));
    const smUp = useMediaQuery(theme.breakpoints.up('sm'));

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {

        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
        console.log(`I am ${open}`);
    }

    


    const [tabValue, setTabValue] = useState(0);  // initial index is zero

    const tabs = [
        {
            name: "Skills",
            href: "skills"
        },
        {
            name: "Projects",
            href: "projects"
        },
        {
            name: "Experience",
            href: "experience"
        },
        {
            name: "About",
            href: "experience"
        }
    ]

    const handleChange = (event, newValue) => {
        setTabValue(newValue);
        console.log(newValue);
    }



    return (
        <div className={classes.root}>
            <AppBar position='fixed' color='inherit'>
                        <Toolbar>
                            <Link href="#intro" variant="h5" underline="none">
                                Aditya Chavan
                            </Link>
                            <Hidden smDown>
                                <Tabs
                                    value={tabValue}
                                    onChange={handleChange}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    style={{flexGrow: 1}}
                                    centered
                                >
                                    {
                                        tabs.map(({name, href}, i) => (
                                            <Tab label={name} value={i} href={`#${href}`}/>
                                        ))
                                    }
                                </Tabs>
                            </Hidden>
                            <IconButton edge="end">
                                <Brightness5Icon />
                            </IconButton>
                            <Hidden mdUp>
                                <React.Fragment>
                                        <IconButton
                                            color="inherit"
                                            onClick={toggleDrawer(true)}
                                            
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <SwipeableDrawer
                                            anchor='right'
                                            open={isDrawerOpen}
                                            onClose={toggleDrawer(false)}
                                            onOpen={toggleDrawer(true)}
                                        >
                                            {
                                                <RightNavbar toggleDrawer={toggleDrawer}/>
                                            }
                                        </SwipeableDrawer>
                                    
                                    </React.Fragment>
                                
                            </Hidden>
                        </Toolbar>
                    </AppBar>
        </div>
        
    )
}

export default Navbar;