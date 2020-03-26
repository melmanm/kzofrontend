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

const PrivacyComponent = () => {
    const classes = useStyles();

    return (
        <div>
            <MenuBar></MenuBar>
            <Container maxWidth="md" className={classes.container} style={{ minHeight: '100vh',padding: '15' }}>
            <Container style={{ width: '92%' }}>

                <Typography variant="h1">
                    Polityka prywatności
</Typography>
                <Typography variant = "body1">
                    W celu zapewnienia działania strony na najwyższym poziomie używamy plików cookies. Korzystanie z naszej witryny z włączoną opcją cookies w przeglądarce oznacza, że strona będzie je umieszczać w urządzeniu.
</Typography>
                <Typography variant="h2">
                    Czym są cookies?
</Typography>
                <Typography variant = "body1">
                    Cookies to niewielkie informacje tekstowe które serwis internetowy wysyła do przeglądarki na urządzeniu docelowym, gdzie zostają zapisane. Następnie serwis ten może uzyskać dostęp do zapisanych wcześniej informacji.
                    Cookies pozwalają zapewnić prawidłowe działanie serwisów w tym między innymi utrzymywanie sesji, zapamiętywanie preferencji i ustawień użytkownika, korzystać z narzędzi analitycznych oraz marketingowych, zapewniać funkcje społecznościowe.
</Typography>
                <Typography variant="h2">
                    Cookies własne
</Typography>
                <Typography variant = "body1">
                    Używamy cookies własnych do przechowywania preferencji użytkownika dotyczących strony. Wykorzystujemy je w celu zapewnienia jej prawidłowego działania.
</Typography>
                <Typography variant="h2">
                    Cookies podmiotów trzecich
</Typography>
                <Typography variant = "body1">
                    Jak większość stron internetowych wykorzystujemy cookies podmiotów trzecich. Wykorzystujemy je do śledzenia statystyk strony takich jak liczba odwiedzin, czas spędzony na stronie, rodzaj systemu operacyjnego oraz przeglądarki Google LLC dotyczące usługi Google Analytics.
                    Korzystanie z Google Analytics wiąże się z umieszczeniem w kodzie strony udostępnionego przez Google kodu (tzw. tracking code). Bazuje on na plikach cookies, ale może wykorzystywać również inne technologie śledzące.
                    Wspomniane cookies pomagają nam zrozumieć w jaki sposób użytkownicy korzystają z naszej strony, co umożliwia ulepszanie jej zawartości, funkcjonalności oraz struktury
</Typography>
                <Typography variant="h2">
                    Wyłączenie cookies
</Typography>
                <Typography variant = "body1">
                    Wiele przeglądarek dopuszcza domyślnie przechowywanie plików cookies w urządzeniu końcowym użytkownika. Użytkownicy strony mogą dokonać w każdym czasie zmiany tych ustawień. Aby zablokować zapisywanie plików cookies na urządzeniu docelowym należy włączyć blokowanie cookies. Szczegółowe opcje dostępne są w ustawieniach przeglądarki internetowej.
                    Wyłączenie cookies może jednak na niektóre funkcjonalności dostępne w ramach tego oraz innych serwisów internetowych.
</Typography>

            </Container>
            </Container>
        </div>
    )
}
export default PrivacyComponent;
