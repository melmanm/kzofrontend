import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CookieConsent, { Cookies } from "react-cookie-consent";

const CookieMessage = () => {
  const [state, setState] = useState(true);
  useEffect(() => {
   
  }, []);

  return(
    <CookieConsent
    onAccept={() => {alert("yay!")}}
    debug={true}
    disableStyles={false}
    style={{fontFamily: 'Barlow, Source Sans Pro, Roboto', opacity: 0.6}}
    buttonStyle={{background: "transparent", color:"white", fontSize: '15pt', fontFamily: 'Barlow, Source Sans Pro, Roboto'}}
    buttonText="Rozumiem"
    //enableDeclineButton
    //declineButtonText="Decline (optional)"
    //onDecline={() => {alert("nay!")}}
  >
    This website uses cookies to enhance the user experience.{" "}
  </CookieConsent>
  );

}

export default CookieMessage;