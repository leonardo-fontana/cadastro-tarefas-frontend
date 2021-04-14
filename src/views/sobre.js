import React, { useState } from 'react'
import { Media } from 'reactstrap';
import Logo from '../assets/images/logo.png';

const Sobre = () => {

    return (
      <Media className="mt-1">
      <Media left middle href="#">
        <Media id="logo" object src={Logo} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Lorem Ipsum Dolor
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
    )
}

export default Sobre;
