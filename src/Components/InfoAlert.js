import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import { AlertTitle } from '@material-ui/lab';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
  link:{
      fontSize: 17,
      textAlign: "center",
      color: '#50C83D'
  }
}));

export default function InfoAlert() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open}>
        <Alert
        severity="info"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
              <AlertTitle variant="subtitle1">Sprawdź czy juz wymienić opony w Twoim mieście!</AlertTitle>
             
             Na podstwawie prognoz pogody oraz danych historycznych obliczamy czy już wymienić opony w Twojej lokalizaji. 
             <Link className={classes.link} title="Czy już wymienić opony?" to="/">Przejdź do analizy </Link>
        </Alert>
      </Collapse>
    </div>
  );
}
