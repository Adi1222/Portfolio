import { Avatar, Grid, Hidden, Typography, useMediaQuery, Tooltip, Container} from '@material-ui/core';
import React, { useContext } from 'react';
import ReactTyped from 'react-typed';
import useStyles from "./styles";
import {ThemeContext} from '../../App';
import {ReactComponent as Meundraw} from "../../images/meundraw.svg"
import {motion} from 'framer-motion';
import { Opacity } from '@material-ui/icons';

const Intro = () => {

    const classes = useStyles();
    const {theme} = useContext(ThemeContext)

    const smDown = useMediaQuery(theme.breakpoints.down('sm'));
    const mdDown = useMediaQuery(theme.breakpoints.down('md'));

    const alignIcons = mdDown ? "center" : "left";

    const alignTitle = mdDown ? "center" : "left";


    const socialMediaDetails = [
        {
            "icon": "linkedIn",
            "alt": "adityachavan1222",
            "link": "www.linkedin.com/in/adityachavan1222",
            "path": "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
            "title": "LinkedIn",
            "bg": "#2979ff",
            "c": ""
        },
        {
            "icon": "github",
            "alt": "adi1222",
            "path": "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
            "title": "GitHub",
            "link": "https://www.github.com/adi1222",
            "bg": "#424242",
            "c": ""
        },
        {
            "icon": "gmail",
            "alt": "email",
            "title": "Gmail",
            "path": "M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",
            "link": "mailto:adityachavan677@gmail.com",
            "bg": "#f44336",
            "c": ""
        }
    ]

    
    return(
        <Container>
        <Grid container alignItems='center' justifyContent='center' className={classes.container}>
            <Grid item xs={12} lg={6} md={12}>
                <motion.div
                    
                    whileInView={{
                        opacity: [0,1],
                        y: [0, -20],
                        transition: {delay: 0.5 , duration: 0.5}
                    }}
                >
                    <Typography variant={smDown? "h3" : "h2"} align={alignTitle}>
                            Hi👋
                    </Typography>
                </motion.div>
                <motion.div
                    
                    whileInView={{
                        opacity: [0,1],
                        y: [0, -20],
                        transition: {delay: 1 , duration: 0.5}
                    }}
                >
                    <Typography variant={smDown? "h3" : "h2"} className={classes.title} align={alignTitle}>
                        I am Aditya Chavan.
                    </Typography>
                </motion.div>
                <motion.div
                    whileInView={{
                        opacity: [0,1],
                        y: [0, -20],
                        transition: {delay: 1.5 , duration: 0.5}
                    }}
                >
                    <Typography variant={smDown ? "h5" : "h4"} align={alignTitle} style={{marginBottom: theme.spacing(5)}}>
                            <ReactTyped 
                                strings={[
                                    "Full-Stack Developer 🌐",
                                    "Problem Solver 👨🏽‍💻",
                                    "Tennis Player 🎾",
                                    "Sneakerhead 👟"
                                ]}
                                typeSpeed={40}
                                backSpeed={45}
                                loop
                            />
                    </Typography>
                </motion.div>
                <Grid container direction="row" spacing={4} xs={12} justifyContent={alignIcons}>
                    {
                        socialMediaDetails.map(({icon, alt, link, title, path, bg}, i) => (
                            <Grid item key={i}>
                                <motion.div
                                    
                                    whileInView={{
                                        opacity: [0,1],
                                        y: [0, -20],
                                        transition: {delay: 1 + 0.5*i},
                                        whileHover: {scale: 1.2}
                                    }}
                                >
                                    <a href={link} target="_blank">
                                        <Tooltip title={title}>
                                            <Avatar  variant="rounded"  style={{backgroundColor: `${bg}`}} className={classes.avatar} >
                                                <svg width={"20px"} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                        <title>{title}</title>
                                                        <path d={path} fill="white"/>
                                                </svg>
                                            </Avatar>
                                        </Tooltip>
                                    </a>
                                </motion.div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            <Hidden mdDown>    
                <Grid item lg={6}>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50
                        }}
                        animate={{
                            opacity: 1,
                            y: -20,
                            transition: {
                                delay: 1.7,
                                duration: 1.5
                            }
                        }}
                    >
                        <div>
                            <Meundraw width="570px" height="570px" className={classes.img}/>
                        </div>
                    </motion.div>
                </Grid>
            </Hidden>
            
        </Grid>
        </Container>
    )
}

export default Intro;