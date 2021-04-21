import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyled from './assets/globalStyled'

import Routers from './routers'

ReactDOM.render(
  <React.Fragment>
    <GlobalStyled />
    <Routers />
  </React.Fragment>,
  document.getElementById('root')
);