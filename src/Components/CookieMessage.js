import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link:{
      textAlign: "center",
      color: '#50C83D'
  }
}));


const CookieMessage = () => {
  const [state, setState] = useState(true);
  const classes = useStyles();
  useEffect(() => {

  }, []);

  return (
    <CookieConsent
      //onAccept={() => { alert("yay!") }}
      //debug={true}
      disableStyles={false}
      style={{ fontFamily: 'Barlow, Source Sans Pro, Roboto', opacity: 0.82 , fontSize: '11pt',}}
      buttonStyle={{ background: "#50C83D", color: "white", fontSize: '15pt', fontFamily: 'Barlow, Source Sans Pro, Roboto', marginTop: '10px', marginBottom:'10px' }}
      buttonText="Ok, Rozumiem"
    //enableDeclineButton
    //declineButtonText="Decline (optional)"
    //onDecline={() => {alert("nay!")}}
    >
      Wykorzystujemy pliki cookies w celu zapewnienia stronie optymalnego działania oraz pozyskania danych dotyczących ruchu na stronie. Wiecej informacji znajdziesz w {" "}
      <Link className={classes.link}  to="/polityka-prywatnosci">
        polityce prywatności
      </Link>.
      {" "}
      Korzystanie z serwisu oznacza akceptację {" "}
      <Link className={classes.link}  to="/regulamin">
        regulaminu.
      </Link>.
    </CookieConsent>
  );

}

export default CookieMessage;