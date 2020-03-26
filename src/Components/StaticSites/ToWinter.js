import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { Button, ButtonGroup, Typography, Paper } from '@material-ui/core';
import MenuBar from '../MenuBar.js';


const useStyles = makeStyles(theme => ({
    container: {
        paddingTop: 25,
        background: "white"
    },
}))

const ToWinter = () => {
    const classes = useStyles();

    return (
        <div>
            <MenuBar></MenuBar>
            <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh' }} >
              <Container style={{ width: '92%' }}>
<Typography variant="h1">
Kiedy zmienić opony na zimowe? 
</Typography>
<Typography variant = "body1">
W tym artykule opiszemy charakterystykę opon zimowych. Odowiemy na pytanie dlaczego w ogóle powinniśmy zmieniać opony na zimowe. Wskażemy najlepszy czas na zmianę opon. Opiszemy ile kosztuje wymiana i jak powinna przebiegać.
</Typography>
<Typography variant="h2" >
1.	Charakterystyka opon zimowych
</Typography>
<Typography variant = "body1">
Opony zimowy odróżniają się od letnich w kilku podstawowych aspektach.
Mieszanka. Do produkcji opon zimowych wykorzystywana jest bardziej miękka mieszanka gumowa. Po wymianie opon na zimowe w warunkach niskiej temperatury pozwala to na uzyskanie lepszej przyczepności 
Bieżnik. Bieżnik opony zawiera zauważalnie więcej nacięć oraz odprowadzeń. Są one głębsze niż w przypadku opon letnich. Pozwalają na uzyskanie lepszej przyczepności i stabilności na śliskich nawierzchniach. Ponadto minimalizują wystąpienie tzw. Aquaplanningu.
</Typography>
<Typography variant="h2">
2.	Dlaczego zmieniać opony na zimowe?
</Typography>
<Typography variant = "h4">
<b>Bezpieczeństwo przede wszystkim</b>
</Typography>
<Typography variant = "body1">
Opony zimowe zwiększają bezpieczeństwo jazdy w warunkach niskiej temperatury. Znacznie skracają drogę hamowania oraz zwiększają stabilność na ośnieżonych, oblodzonych i obłoconych nawierzchniach. 
</Typography>
<Typography variant = "h4">
<b>Uszkodzenie letnich opon</b>
</Typography>
<Typography>
Jazda w warunkach zimowych (niskiej temperatury) na oponach letnich może prowadzić do ich uszkodzenia. Ich bieżnik staje się twardy. Co oprócz zmniejszonej przyczepności wprowadza również ryzyko ukruszenia elementów bieżnika a nawet pęknięcia.
</Typography>
<Typography variant="h2">
3.	Kiedy wymienić opony na zimowe?
</Typography>
<Typography variant = "body1">
W przypadku wszelkich dyskusji na temat odpowiedniego momentu wymiany opon na zimowe wspomniana powinna zostać bariera 7°C. Wiodący producenci opon; Goodyear, Continental, Dębica wskazują, że kiedy temperatura spada poniżej 7°C należy wymienić opony na zimowe. Jest to w pierwszej kolejności związane z mieszanką gumy z jakiej wykonana jest opona. W przypadku zimowych osiąga one najlepsze właściwości poniżej 7°C, zapewniając komfort i bezpieczeństwo jazdy.
</Typography>
<Typography variant = "body1">
Przekroczenie granicy 7°C nie powinno w każdym wypadku stanowić o zmianie opon. Należy wziąć pod uwagę historyczne dane pogodowe, prognozy oraz trend temperatury. Dane te pozwalają ustalić najlepszy moment wymiany opon a przede wszystkim zminimalizować ryzyko zbyt wczesnej wymiany opon na zimowe.
</Typography>
<Typography variant = "body1">
Serwis kiedywymiecicopony.pl powstał w celu wskazania, czy należy już wymienić opony. 
Skorzystaj z naszego serwisu aby dowiedzieć się czy to dobry czas na wymianą opon w twoim mieście. To proste- wskaż miejscowość w której jeździsz oraz najczęstszą porę jazdy a my obliczymy czy powinieneś wziąć pod uwagę wymianę opon.
kiedywimienicopony.pl
</Typography>
<Typography variant="h2">
4.	Ile kosztuje wymiana opon?
</Typography>
<Typography variant = "body1">
Cena wymiany opon w punktach wulkanizacyjnych waha się od ok. 50 – 200 zł w zależności od rodzaju opony (wymiana opon run on flat jest zazwyczaj droższa) wielkości felgi oraz lokalizacji. Przy usłudze zmiany opon na felgach koła są również wyważane. 
</Typography>
</Container>
            </Container>
        </div>
    )
}
export default ToWinter;
