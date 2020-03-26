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
        h1:{

            fontSize: '2.125rem',
            paddingTop:  '1rem',
            paddingBottom:  '1rem',
        },
        h2:{

            fontSize: '1.5rem',
            paddingTop:  '0.5rem',
            paddingBottom:  '0.5rem',
        },
        h3:{

            fontSize: '1.35rem',
            paddingTop:  '0.5rem',
            paddingBottom:  '0.5rem',
        },
        h4:{

            fontSize: '1.2rem',
            paddingTop:  '0.5rem',
            paddingBottom:  '0.5rem',
        },
        body1:{
            paddingTop:  '1rem',
            paddingBottom:  '1rem',
            fontSize: 19,
            textAlign: "justify",
            lineHeight: '1.7'
        },
        subtitle1:{
            fontSize: 17,
            lineHeight: '1.5'
        }
    },
    status: {
        danger: 'orange',
    },
    background: {
        default: "#444",
    }
    //shadows: ["none"]
});