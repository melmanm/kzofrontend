import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, ButtonGroup, Typography, Paper, Breadcrumbs } from '@material-ui/core';
import MenuBar from '../MenuBar.js';
import { Alert, AlertTitle } from '@material-ui/lab';
import InfoAlert from '../InfoAlert.js';
import summer from '../../img/summer.jpg'
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

const ToSummer = () => {
    const classes = useStyles();

    return (
        <div>
            <Helmet>
            
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
                <title>Kiedy zmienić opony na letnie? | kiedyzmienicopony.pl</title>
                <meta
                    name="description"
                    content="Sprawdź kiedy wymienić opony na letnie. Skorzystaj z naszego sewisu i sprawdź naszą rekomendacje wymiany opon na letnie w Twoim mieście."
                />
                <meta name="keywords" content="zmiana opon, opony letnie, wymiana sezonowa, wymiana opon na letnie" />
            </Helmet>
            <MenuBar></MenuBar>
            <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh' }} >
                <Container style={{ width: '92%' }}>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link  to="/">
                            kiedyzmienicopony.pl</Link>
                        <Link  to="/na-letnie">
                            sezonowa zmiana opon na letnie
                        </Link>
                    </Breadcrumbs>

                    <InfoAlert></InfoAlert>
                    <Typography variant="h1">
                        Kiedy zmienić opony na letnie?
</Typography>
                    <Typography variant="body1">
                        W tym artykule opiszemy charakterystykę opon letnich. Odpowiemy na pytanie dlaczego powinniśmy zmieniać opony na letnie. Wskażemy najlepszy czas na zmianę opon. Opiszemy ile kosztuje wymiana i jak powinna przebiegać.
</Typography>
                    <img src={summer} className={classes.image} alt="czy już wymienić opony na letnie?" title="kiedy wymienić opony na letnie?" />

                    <Paper className={classes.paper}>
                        <Typography variant="h4">
                            Spis Treści
</Typography>
                        <Link className={classes.textItem} to="#kiedy-zmienic-na-letnie-charakterystyka" title="kiedy zmienić opony na letnie charakterystyka">
                            1.	Charakterystyka opon letnich
</Link>
                        <Link className={classes.textItem} to="#kiedy-zmienic-na-letnie-dlaczego-zmienic" title="kiedy zmienić opony na letnie i dlaczego">
                            2.	Dlaczego zmieniać opony na letnie?
</Link>
                        <Link className={classes.textItem} to="#kiedy-wymienic-na-letnie" title="czy już wymienić opony">
                            3.	Kiedy wymienić opony na letnie?
</Link>
                        <Link className={classes.textItem} to="#ile-kosztuje-wymiana-na-letnie" title="ile kosztuje wymiana opon na letnie">
                            4.	Ile kosztuje wymiana opon?
</Link>
                    </Paper>
                    <Typography variant="h2" id="#kiedy-zmienic-na-letnie-charakterystyka">
                        1.	Charakterystyka opon letnich
</Typography>
                    <Typography variant="body1" >
                        Opony letnie różnią się od zimowych w dwóch podstawowych aspektach. Po pierwsze mieszanka gumy. Jest on twardsza w stosunku do opon zimowych. Staje się bardziej miękka w warunkach letniej temperatury przez co lepiej przylega do drogi oraz zmniejsza drogę hamowania. Opona letnia różni się także budową bieżnika. Nie posiada on tak dużo rowków jak w przypadku opony zimowej.  W nowych oponach letnich wysokość bieżnika jest niższa niż w zimowych. Tutaj jego jednym z głównych zadań jest poprawne odprowadzanie wody.
</Typography>
                    <Typography variant="h2" id="kiedy-zmienic-na-letnie-dlaczego-zmienic">
                        2.	Dlaczego zmieniać opony na letnie?
</Typography>
                    <Typography variant="h4">
                        <b>Zużycie paliwa</b>
                    </Typography>
                    <Typography variant="body1">
                        Nie wykonanie sezonowej zmiany opon na letnie często prowadzi do pogorszenia komfortu jazdy. Opony zimowe w wysokich temperaturach generują większy hałas, co bezpośrednio przekłada się na wrażenia z jazdy w kabinie. Dodatkowo jazda na oponach zimowych latem może prowadzić do wrażenia pogorszenia się stabilności prowadzenia auta.
</Typography>
                    <Typography variant="h4">
                        <b>Komfort i bezpieczeństwo jazdy</b>
                    </Typography>
                    <Typography>
                        Nie wykonanie sezonowej zmiany opon na letnie często prowadzi do pogorszenia komfortu jazdy. Opony zimowe w wysokich temperaturach generują większy hałas, co bezpośrednio przekłada się na wrażenia z jazdy w kabinie. Dodatkowo jazda na oponach zimowych latem może prowadzić do wrażenia pogorszenia się stabilności prowadzenia auta.
</Typography>
                    <Typography variant="h4">
                        <b>Szybkie zużycie bieżnika</b>
                    </Typography>
                    <Typography>
                        Mieszanka gumowa opon zimowych nie jest przystosowana do wysokich temperatur. Utrata wysokości bieżnika będzie odbywać się w nich znacznie szybciej niż w warunkach zimowych.
</Typography>
                    <Typography variant="h2" id="kiedy-wymienic-na-letnie">
                        3.	Kiedy wymienić opony na letnie?
</Typography>
                    <Typography variant="body1">
                        W przypadku wszelkich dyskusji na temat odpowiedniego momentu wymiany opon na letnie wspomniana powinna zostać bariera 7°C. Wiodący producenci opon; Goodyear, Continental, Dębica wskazują, że kiedy temperatura wzrasta powyżej 7°C należy wymienić opony na letnie. Jest to w pierwszej kolejności związane z mieszanką gumy z jakiej wykonana jest opona. W przypadku letnich osiąga one najlepsze właściwości w temperaturze powyżej 7°C, zapewniając komfort i bezpieczeństwo jazdy.
</Typography>
                    <Typography variant="body1">
                        Przekroczenie granicy 7°C nie powinno w każdym wypadku stanowić o zmianie opon. Należy wziąć pod uwagę historyczne dane pogodowe, prognozy oraz trend temperatury. Dane te pozwalają ustalić najlepszy moment wymiany opon a przede wszystkim zminimalizować ryzyko zbyt wczesnej wymiany opon na letnie.
</Typography>
                    <Typography variant="body1">
                        Skorzystaj z naszego serwisu aby dowiedzieć się czy to dobry czas na wymianę opon w twoim mieście. To proste- wskaż miejscowość w której jeździsz oraz najczęstszą porę jazdy a my obliczymy czy powinieneś wziąć pod uwagę wymianę opon.
                        <Link to="/" title="Kiedy zmienić opony na letnie">Przejdź do analizy pogodowej.</Link>
                    </Typography>
                    <Typography variant="h2" id="ile-kosztuje-wymiana-na-letnie">
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
export default ToSummer;
