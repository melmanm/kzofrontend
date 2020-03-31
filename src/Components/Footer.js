import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Router } from '@material-ui/icons';


const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
        backgroundColor: '#333'
    },
    header: {
        marginBottom: 15,
        color: '#ccc',
        fontSize: '15pt'
    },
    textItem: {
        color: 'white',
        color: '#ccc',
        fontSize: 17,
        lineHeight: '1.5',
        fontFamily: 'Barlow, Source Sans Pro, Roboto',
        display: 'block'
    },
    menuButton: {
        //marginRight: theme.spacing(2),
    },
    bar: {
        paddingRight: 5,
        paddingLeft: 5,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Footer() {
    const classes = useStyles();

    return (

        <Grid className={classes.root}>
            <Container maxWidth="md" >
                <Grid container spacing={4}>
                    <Grid item sm={4}>
                        <Typography variant="subtitle1" className={classes.header}>Wymiana opon</Typography>
                        <Link to="/na-letnie" title="kiedy zmienić opony na letnie" className={classes.textItem}>Kiedy zmienić opony na letnie</Link>
                        <Link to="/na-zimowe" title="kiedy zmienić opony na zimowe" className={classes.textItem}>Kiedy zmienić opony na zimowe</Link>


                    </Grid>
                    <Grid item sm={4} container spacing={2}>
                        <Grid item sm={12}>
                            <Typography variant="subtitle1" className={classes.header}>Kontakt</Typography>
                            <Typography variant="subtitle1" className={classes.textItem}>kontakt@kiedyzmienicopony.pl</Typography>
                        </Grid>

                        <Grid item sm={12}>
                            <Typography variant="subtitle1" className={classes.header}>Prywatność</Typography>
                            <Link to="/polityka-prywatnosci" title="kiedy zmienić opony - polityka prywatności" className={classes.textItem}>
                                Polityka Prywatności
                            </Link>
                            <Link to="/regulamin" title="kiedy zmienić opony - regulamin" className={classes.textItem}>
                                Regulamin
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant="subtitle1" className={classes.header}>kiedyzmienicopony.pl</Typography>
                        <Typography variant="subtitle1" className={classes.textItem}>Wskazujemy najepszy czas na wymianę opon na letnie lub na zimowe. Jeśli zastanawiasz się kiedy zmienić opony - to proste - odopwiedź znajdziesz na kiedyzmienicopony.pl. </Typography>

                    </Grid>
                </Grid>
            </Container>
        </Grid>

    );
}