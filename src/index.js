import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import appReducer from './Reducers/Reducer';
import { Provider } from 'react-redux';
import Searech from './Components/Search';
import GraphArea from './Components/GraphArea.js'
import thunk from 'redux-thunk';
import { ThemeProvider } from '@material-ui/core';
import {theme} from './Theme/theme.js'
import Search from './Components/Search';
import Welcome from './Components/Welcome';
import store from './store.js';
import CookieMessage from './Components/CookieMessage';
import Footer from './Components/Footer';
import { BrowserRouter, HashRouter, useHistory } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import { hydrate, render } from "react-dom";
//const unsubscribe = store.subscribe(() => console.log(store.getState()));
window.onbeforeunload = (e) => {
    setTimeout(function() { window.scrollTo(0, 0); }, 0);
    };
    const rootElement = document.getElementById("root");
    if (rootElement.hasChildNodes()) {
      hydrate(  <div>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
                <Footer/>
                <CookieMessage/>
            </BrowserRouter>
            </ThemeProvider>
            </Provider>
            </div>, rootElement);
    } else {
      render(  <div>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
            <BrowserRouter>
                <App/>
                <Footer/>
                <CookieMessage/>
            </BrowserRouter>
            </ThemeProvider>
            </Provider>
            </div>, rootElement);
    }
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
