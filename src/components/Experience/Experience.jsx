import React, {useContext} from 'react';
import { ThemeContext } from '../../theme';
import { useTheme, Avatar, Container, Card, CardActionArea, CardActions, CardContent, CardHeader, Paper, Grid, Hidden, Tooltip, Typography, useMediaQuery, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { ReactComponent as ExperienceImg } from '../../images/experience.svg';
import { ReactComponent as ExperienceSvg } from '../../images/darktheme/experience.svg';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import { LocationCity } from '@material-ui/icons';
import { motion } from 'framer-motion';
import { useThemeMode } from '../../Hooks/ThemeContext';
import GlassCard from '../GlassCard/GlassCard';

const Experience = () => {

    const theme = useTheme();

    const {darkMode, toggleTheme} = useThemeMode();

    const classes = useStyles();

    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
   

    const experienceObj = [
        {
            "company": "Shyena Tech Yarns",
            "role": "Web Developer",
            "duration": "3 months",
            "location": "Pune, India.",
            "href": "https://shyenatechyarns.com/",
            "img": "styr.jpg",
            "range": "22-04-2020 - 31-7-2020"

        },
        {
            "company": "UBS",
            "role": "Technology Intern",
            "duration": "2 months",
            "location": "Pune, India.",
            "href": "https://www.linkedin.com/company/ubs/?originalSubdomain=in",
            "img": "ubs.png",
            "range": "7-06-2021 - 7-6-2021"
        }
    ]

    return (
        
            <div id="experience">
            
            <Grid container  justifyContent='center' alignItems="center" spacing={0} className={classes.cont}>
                <Grid item lg={6} xs={12}>
                    <Typography align="center" variant="h3" style={{marginTop: theme.spacing(10)}}>
                        Work Experience
                    </Typography>
                    <Hidden mdDown>
                        {
                            darkMode === true ? 
                            (
                                <div>
                                    <ExperienceSvg width="550px" height="550px" className={classes.img}/>
                                </div>
                            ) : 
                            (
                                <div>
                                    <ExperienceImg width="550px" height="550px" className={classes.img}/>
                                </div>
                            )
                        }
                    </Hidden>
                </Grid>
                <Grid container item direction="row" alignItems="center" justifyContent='space-evenly' lg={6} xs={12} spacing={2}>
                    {
                        mdDown ?  experienceObj.map(({company, role, duration, location, range, href, img}, i) => (
                            <Grid item key={i}>
                                <motion.div
                                    whileInView={{
                                        opacity: [0,1],
                                        x: [`${-70*Math.pow(-1, i)}%`, "0%"],
                                        transition: {delay: 0.5 + 0.25*i, duration: 0.8},
                                    
                                    }}
                                >
                                    
                                <Card
                                    className={classes.card}
                                    
                                >
                                    <CardActionArea
                                        href={href}
                                        target="_blank"
                                        
                                    >
                                        <CardHeader 
                                            title={company}
                                            subheader={role}
                                        />
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image={require(`../../images/${img}`)}
                                            title={company}
                                        />
                                        <CardHeader
                                            avatar={
                                                <DateRangeTwoToneIcon />
                                            }

                                            title={duration}
                                            subheader={range}
                                        />
                                        
                                        <CardHeader
                                            avatar={
                                                <LocationCity />
                                            }
                                            subheader={location}
                                        />
                                    </CardActionArea>
                                </Card>
                                    
                                </motion.div>
                                
                            </Grid>
                        )) : experienceObj.map(({company, role, duration, location, range, href, img}, i) => (
                            <Grid item key={i}>
                                <motion.div
                                    whileInView={{
                                        opacity: [0, 1],
                                        x: ["100%", "0%"],
                                        transition: {delay: 0.5 + 0.25*i, duration: 0.8},
                                    }}
                                >
                                    <Card
                                        className={classes.card}
                                    >
                                        <CardActionArea
                                            href={href}
                                            target="_blank"
                                            
                                        >
                                            <CardHeader 
                                                title={company}
                                                subheader={role}
                                            />
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={require(`../../images/${img}`)}
                                                title={company}
                                            />
                                            <CardHeader
                                                avatar={
                                                    <DateRangeTwoToneIcon />
                                                }

                                                title={duration}
                                                subheader={range}
                                            />
                                            
                                            <CardHeader
                                                avatar={
                                                    <LocationCity />
                                                }
                                                subheader={location}
                                            />
                                        </CardActionArea>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
            </div>
    
    )
}

export default Experience;

                    