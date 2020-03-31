import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from '@material-ui/core';

const CookieMessage = () => {
  const [state, setState] = useState(true);
  useEffect(() => {

  }, []);

  return (
    <CookieConsent
      //onAccept={() => { alert("yay!") }}
      //debug={true}
      disableStyles={false}
      style={{ fontFamily: 'Barlow, Source Sans Pro, Roboto', opacity: 0.8 }}
      buttonStyle={{ background: "transparent", color: "white", fontSize: '15pt', fontFamily: 'Barlow, Source Sans Pro, Roboto' }}
      buttonText="Rozumiem"
    //enableDeclineButton
    //declineButtonText="Decline (optional)"
    //onDecline={() => {alert("nay!")}}
    >
      Wykorzystujemy pliki cookies w celu zapewnienia stronie optymalnego działania oraz pozyskania danych dotyczących ruchu na stronie. Wiecej informacji znajdziesz w naszej {" "}
      <Link href="/polityka-prywatnosci">
        polityce prywatności
      </Link>.
    </CookieConsent>
  );

}

export default CookieMessage;