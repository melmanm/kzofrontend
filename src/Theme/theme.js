import { createMuiTheme } from '@material-ui/core/styles';
import { green, yellow } from '@material-ui/core/colors';
import '../App.css'
export const theme = createMuiTheme({
    palette: {

        text: {
            primary: '#444',
        },
        primary: { main: '#50C83D', contrastText: '#fff', },
        secondary: { main: '#efefef', contrastText: '#000', },
    },
    typography: {
        fontFamily: 'Barlow, Source Sans Pro, Roboto',
    },
    status: {
        danger: 'orange',
    },
    background: {
        default: "#444"
    },
    //shadows: ["none"]
});