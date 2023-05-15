import React from 'react';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

import Switch from '../../components/Switch';
import { FiLogOut as LogoutButton } from 'react-icons/fi';

import { devices } from '../../constants';

const ControlPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  }

  return (
    <Container>
      <div className='card'>
        <div className='title-panel'>
          <h5>Dispositivos</h5>
          <LogoutButton
            className='logout-button-panel'
            title='Logout'
            onClick={handleLogout}
          />
        </div>
        {
          devices.map((item, index) => (
            <div
              key={item.id + '' + index}
              index={index + '_line'}
              className='name-switch-button-set'
            >
              <span className='device-name'>{item.name}</span>
              <span className='device-switch-button'>
                <Switch
                  index={index + '_button'}
                  exhaustName={item.name}
                  pathON={item.path_on}
                  pathOFF={item.path_off}
                />
              </span>
            </div>
          ))
        }
      </div>
    </Container>
  );
}

export default ControlPanel;