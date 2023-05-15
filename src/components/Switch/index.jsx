import React, { useState } from 'react';
import { Container } from './style';
import { toast } from 'react-toastify';

import { webServerArduino } from '../../services/webServerArduino';

const Switch = ({ exhaustName, pathON, pathOFF }) => {
  const [switchButton, setSwitchButton] = useState(false);

  const sendONToArduino = async () => {
    console.log(webServerArduino);
    await webServerArduino.get(pathON).then(response => {
      toast.info(`${exhaustName} ligado.`);
    }).catch(e => {
      toast.error(e.response.data.msg);
    });
  }

  const sendOFFToArduino = async () => {
    console.log(webServerArduino);
    await webServerArduino.get(pathOFF).then(response => {
      toast.info(`${exhaustName} desligado.`);
    }).catch(e => {
      toast.error(e.response.data.msg);
    });
  }

  const handleSwitchChange = () => {
    if (!switchButton) {
      sendONToArduino();
    } else {
      sendOFFToArduino();
    }

    setSwitchButton(!switchButton);
  }

  return (
    <Container onClick={handleSwitchChange}>
      <div className={`switch-btn ${!switchButton ? 'disabled' : ''}`}>
        {switchButton ? "ON" : "OFF"}
      </div>
    </Container>
  );
}

export default Switch;