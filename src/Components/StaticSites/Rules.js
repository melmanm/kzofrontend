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

const RulesComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <MenuBar></MenuBar>
            <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh',padding: '15' }}>
            <Container style={{ width: '92%' }}>

                <Typography variant="h1">
                    Regulamin serwisu
</Typography>
                <Typography variant = "body1">
                Celem serwisu jest wspomaganie użytkowników samochodów w decyzji o sezonowej zmianie opon. Na podstawie prognozy pogody oraz danych historycznych dokonywane są kalkulacje, których wynikiem jest nasza rekomendacja dotycząca rodzaju opon. Wynik jest aktualny w chwili kalkulacji. 
</Typography>
<Typography variant = "body1">
Serwis oblicza rekomendacje dotyczące rodzaju opon na podstawie algorytmu matematycznego. Jest to jedynie nasza rekomendacja. Algorytm nie uwzględnia wszystkich warunków, okoliczności oraz indywidualnych preferencji. Decyzja o sezonowej wymianie opon powinna być podjęta indywidualnie przez użytkownika samochodu uwzględniając prze wszystkim bezpieczeństwo jazdy.
</Typography>
<Typography variant = "body1">
Serwis prezentuje dane pogodowe dostawcy MET Norway, które pobierane są przez interfejs API.  Stawiamy sobie za cel dokładność naszych wskazań. Nie ponosimy jednak w żaden sposób odpowiedzialności za dane (w tym ich kompletność oraz aktualność). 
</Typography>

            </Container>
            </Container>
        </div>
    )
}
export default RulesComponent;
