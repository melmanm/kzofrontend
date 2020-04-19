import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, ButtonGroup, Typography, Paper, Breadcrumbs, Link as HashLink } from '@material-ui/core';
import MenuBar from '../MenuBar.js';
import { Alert, AlertTitle } from '@material-ui/lab';
import InfoAlert from '../InfoAlert.js';
import winter from '../../img/winter.jpg'
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 25,
        background: "white"
    },
    textItem: {
        color: '#444',
        fontSize: 17,
        lineHeight: '1.5',
        fontFamily: 'Barlow, Source Sans Pro, Roboto',
        paddingTop: '0.2rem',
        paddingBottom: '0.2rem',
        display: 'block'

    },
    paper: {
        padding: 15,
        background: 'rgb(237, 247, 237)'
    },
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 15,
        width: '100%',
        height: 'auto',
    }
}))

const ToWinter = () => {
    const classes = useStyles();

    return (
        <div>
            <Helmet>
            
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
                <title>Kiedy zmienić opony na zimowe? | kiedyzmienicopony.pl</title>
                <meta
                    name="description"
                    content="Sprawdź kiedy wymienić opony na zimowe. Skorzystaj z naszej aplikacji i sprawdź naszą rekomendacje wymiany opon na zimowe w Twoim mieście."
                />
                <meta name="keywords" content="zmiana opon, opony zimowe, wymiana sezonowa, wymiana opon na zimowe" />
            </Helmet>
            <MenuBar></MenuBar>
            <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh' }} >
                <Container style={{ width: '92%' }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link color="inherit" to="/">
                            kiedyzmienicopony.pl</Link>
                        <Link color="inherit" to="/na-zimowe">
                            sezonowa zmiana opon na zimowe
                        </Link>
                    </Breadcrumbs>

                    <InfoAlert></InfoAlert>
                    <Typography variant="h1">
                        Kiedy zmienić opony na zimowe?
</Typography>
                    <Typography variant="body1">
                        W tym artykule opiszemy charakterystykę opon zimowych. Odpowiemy na pytanie dlaczego w ogóle powinniśmy zmieniać opony na zimowe. Wskażemy najlepszy czas na zmianę opon. Opiszemy ile kosztuje wymiana i jak powinna przebiegać.
</Typography>
                    <img src={winter} className={classes.image} alt="czy już wymienić opony na zimowe?" title="kiedy wymienić opony na zimowe?" />

                    <Paper className={classes.paper}>
                        <Typography variant="h4">
                            Spis Treści
</Typography>
                        <HashLink className={classes.textItem} href="#kiedy-zmienic-opony-na-zimowe-charakterystyka" title="kiedy zmienić opony na zimowe charakterystyka">
                            1.	Charakterystyka opon zimowych
</HashLink>
                        <HashLink className={classes.textItem} href="#kiedy-zmienic-na-zimowe-dlaczego-zmienic" title="kiedy zmienić opony na zimowe i dlaczego">
                            2.	Dlaczego zmieniać opony na zimowe?
</HashLink>
                        <HashLink className={classes.textItem} href="#kiedy-wymienic-na-zimowe" title="czy już wymienić opony">
                            3.	Kiedy wymienić opony na zimowe?
</HashLink>
                        <HashLink className={classes.textItem} href="#ile-kosztuje-wymiana-na-zimowe" title="ile kosztuje wymiana opon na zimowe">
                            4.	Ile kosztuje wymiana opon?
</HashLink>
                    </Paper>
                    <Typography variant="h2" id="kiedy-zmienic-opony-na-zimowe-charakterystyka">
                        1.	Charakterystyka opon zimowych
</Typography>
                    <Typography variant="body1" >
                        Opony zimowe odróżniają się od letnich w kilku podstawowych aspektach.
                        Mieszanka. Do produkcji opon zimowych wykorzystywana jest bardziej miękka mieszanka gumowa. Po wymianie opon na zimowe w warunkach niskiej temperatury pozwala to na uzyskanie lepszej przyczepności
                        Bieżnik. Bieżnik opony zawiera zauważalnie więcej nacięć oraz odprowadzeń. Są one głębsze niż w przypadku opon letnich. Pozwalają na uzyskanie lepszej przyczepności i stabilności na śliskich nawierzchniach. Ponadto minimalizują wystąpienie tzw. Aquaplanningu.
</Typography>
                    <Typography variant="h2" id="kiedy-zmienic-na-zimowe-dlaczego-zmienic">
                        2.	Dlaczego zmieniać opony na zimowe?
</Typography>
                    <Typography variant="h4">
                        <b>Bezpieczeństwo przede wszystkim</b>
                    </Typography>
                    <Typography variant="body1">
                        Opony zimowe zwiększają bezpieczeństwo jazdy w warunkach niskiej temperatury. Znacznie skracają drogę hamowania oraz zwiększają stabilność na ośnieżonych, oblodzonych i obłoconych nawierzchniach.
</Typography>
                    <Typography variant="h4">
                        <b>Uszkodzenie letnich opon</b>
                    </Typography>
                    <Typography>
                        Jazda w warunkach zimowych (niskiej temperatury) na oponach letnich może prowadzić do ich uszkodzenia. Ich bieżnik staje się twardy. Oprócz zmniejszonej przyczepności wprowadza to również ryzyko ukruszenia elementów bieżnika a nawet pęknięcia.
</Typography>
                    <Typography variant="h2" id="kiedy-wymienic-na-zimowe">
                        3.	Kiedy wymienić opony na zimowe?
</Typography>
                    <Typography variant="body1">
                        W przypadku wszelkich dyskusji na temat odpowiedniego momentu wymiany opon na zimowe wspomniana powinna zostać bariera 7°C. Wiodący producenci opon; Goodyear, Continental, Dębica wskazują, że kiedy temperatura spada poniżej 7°C należy wymienić opony na zimowe. Jest to w pierwszej kolejności związane z mieszanką gumy z jakiej wykonana jest opona. W przypadku zimowych osiąga one najlepsze właściwości poniżej 7°C, zapewniając komfort i bezpieczeństwo jazdy.
</Typography>
                    <Typography variant="body1">
                        Przekroczenie granicy 7°C nie powinno w każdym wypadku stanowić o zmianie opon. Należy wziąć pod uwagę historyczne dane pogodowe, prognozy oraz trend temperatury. Dane te pozwalają ustalić najlepszy moment wymiany opon a przede wszystkim zminimalizować ryzyko zbyt wczesnej wymiany opon na zimowe.
</Typography>
                    <Typography variant="body1">
                        Skorzystaj z naszego serwisu aby dowiedzieć się czy to dobry czas na wymianę opon w twoim mieście. To proste- wskaż miejscowość w której jeździsz oraz najczęstszą porę jazdy a my obliczymy czy powinieneś wziąć pod uwagę wymianę opon.
                        <Link to="/" title="Kiedy zmienić opony na zimowe">Przejdź do analizy pogodowej.</Link>
                    </Typography>
                    <Typography variant="h2" id="ile-kosztuje-wymiana-na-zimowe">
                        4.	Ile kosztuje wymiana opon?
</Typography>
                    <Typography variant="body1">
                        Cena wymiany opon w punktach wulkanizacyjnych waha się od ok. 50 – 200 zł w zależności od rodzaju opony (wymiana opon run on flat jest zazwyczaj droższa) wielkości felgi oraz lokalizacji. Przy usłudze zmiany opon na felgach koła są również wyważane.
</Typography>
                </Container>
            </Container>
        </div>
    )
}
export default ToWinter;
