import React from 'react';
import { AppBar, Avatar, Divider, Hidden, IconButton, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, SwipeableDrawer, Tab, Tabs, Toolbar, Typography } from '@material-ui/core';
import useStyles from "./styles"
import CloseIcon from '@material-ui/icons/Close';
const RightNavbar = ({toggleDrawer}) => {

    const classes = useStyles();


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
        {['Skills', 'Projects', 'Experience', 'About'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text}/>
            <Divider />
          </ListItem>
        ))}
        </List>
    </div>
    )
}


export default RightNavbar;