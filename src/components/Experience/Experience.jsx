import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import { Avatar, Container, Card, CardActionArea, CardActions, CardContent, CardHeader, Grid, Hidden, Tooltip, Typography, useMediaQuery, CardMedia } from '@material-ui/core';
import useStyles from './styles';
import { ReactComponent as ExperienceImg } from '../../images/experience.svg';
import DateRangeTwoToneIcon from '@material-ui/icons/DateRangeTwoTone';
import { LocationCity } from '@material-ui/icons';

const Experience = () => {

    const {theme} = useContext(ThemeContext);

    const classes = useStyles();

    const mdDown = useMediaQuery(theme.breakpoints.down("md"));


    return (
        <Container>
            <Grid container  justifyContent='center' alignItems="center" spacing={2}>
                <Grid item lg={6} xs={12}>
                    <Typography align="center" variant="h4">
                        Work Experience
                    </Typography>
                    <Hidden mdDown>
                        <div>
                            <ExperienceImg width="550px" height="550px" className={classes.img}/>
                        </div>
                    </Hidden>
                </Grid>
                <Grid container item direction="row" alignItems="center0" lg={6} xs={12} spacing={5}>
                <Grid item>
                        <Card
                            className={classes.card}
                        >
                            <CardActionArea
                                href="/"
                                target="_blank"
                                className={classes.cardActionArea}
                            >
                                <CardHeader 
                                    avatar={
                                        <Avatar>
                                            R
                                        </Avatar>
                                    }
                                    title="Shyena Tech Yarns"
                                    subheader="Web Developer"
                                />
                                 <CardMedia
                                    className={classes.cardMedia}
                                    image="../../images/sty.jpg"
                                    title="sty"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item>
                        <Card>
                            <CardActionArea
                                href="/"
                                target="_blank"
                            >
                                <CardHeader 
                                    avatar={
                                        <Avatar>
                                            R
                                        </Avatar>
                                    }
                                    title="Shyena Tech Yarns"
                                    subheader="Web Developer"
                                />

                                <CardHeader
                                    avatar={
                                        <DateRangeTwoToneIcon />
                                    }

                                    title="3 months"
                                    subheader="22-04-2020 - 31-7-2020"
                                />
                                
                                <CardHeader
                                    avatar={
                                        <LocationCity />
                                    }
                                    subheader="Pune, India"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>

                </Grid>
                
            </Grid>
        </Container>
    )
}

export default Experience;

                    