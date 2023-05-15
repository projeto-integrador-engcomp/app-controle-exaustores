import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

const SignUp = () => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setLoad(true);

    let data = {
      name: e.target.user_name.value,
      email: e.target.user_email.value,
      password: e.target.user_password.value,
      confirmPassword: e.target.user_confirm_password.value
    }

    api.post('/register', data)
      .then(response => {
        setLoad(false);
        toast.success('Cadastro realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/signin')
        });
      })
      .catch(e => {
        toast.error(e.response.data.msg);
        setLoad(false);
      })
  }, [navigate]);

  if (load) {
    return <Loader />;
  }

  return (
    <Container>
      <div className='card'>
        <h5>Cadastre-se:</h5>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="user_name"
            placeholder="Informe seu nome"
          />
          <input
            type="email"
            id="user_email"
            placeholder="Informe seu email"
          />
          <input
            type="password"
            id="user_password"
            placeholder="Informe sua senha"
          />
          <input
            type="password"
            id="user_confirm_password"
            placeholder="Confirme sua senha"
          />
          <input
            type="submit"
            value="Cadastrar"
          />
        </form>
      </div>
    </Container>
  );
}

export default SignUp;