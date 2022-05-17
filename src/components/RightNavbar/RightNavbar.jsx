import React from 'react';
import { AppBar, Avatar, Divider, Hidden, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, SwipeableDrawer, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./styles"
import CloseIcon from '@material-ui/icons/Close';
const RightNavbar = ({toggleDrawer}) => {

    const classes = useStyles();

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



    return (    
    <div
        className={classes.list}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        >
        <List>
            <ListItem button>
                <ListItemIcon onClick={toggleDrawer(false)}>
                    <CloseIcon />        
                </ListItemIcon>
            </ListItem>
        {tabs.map(({name, href}, index) => (
          <ListItem button key={name} component="a" href={`#${href}`}>
            <ListItemText primary={name}/>
            <Divider />
          </ListItem>
        ))}
        </List>
    </div>
    )
}


export default RightNavbar;