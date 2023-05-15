import React from 'react';
import { Container } from './style';
import { useNavigate } from 'react-router-dom';

import fanImage from '../../global/assets/images/fan.png';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <div className='card'>
        <img src={fanImage} alt="Logo" />
        <h1>Exaustores Inteligentes</h1>
        <input
          id='signin_system'
          type='button'
          value='Entrar no Sistema'
          onClick={() => navigate('/signin')}
        />
        <input
          id='signup_system'
          type='button'
          value='Cadastrar Usuário'
          onClick={() => navigate('/signup')}
        />
      </div>
    </Container>
  );
}

export default Home;