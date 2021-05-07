import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyled from './assets/globalStyled'
import { Provider } from 'react-redux'
import store from './store'
import { ThemeProvider } from 'styled-components';
import theme from './assets/theme'
import { Helmet } from "react-helmet";
import Routers from './routers'

const googleFont = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap";

ReactDOM.render(
  <Provider store={store}>
    <Helmet>
      <link rel="stylesheet" href={googleFont} />
    </Helmet>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routers />
    </ThemeProvider>
  </Provider >,
  document.getElementById('root')
);