import React, { useState, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../components/Loader';
import { Container } from './style';
import { api } from '../../services/api';

const SignIn = () => {
  const [load, setLoad] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setLoad(true);

    let data = {
      email: e.target.user_email.value,
      password: e.target.user_password.value,
    }

    api.post('/login', data)
      .then(response => {
        const sessionToken = JSON.stringify(response.data.token);
        localStorage.setItem('@exhaustControlToken', sessionToken);
        setLoad(false);
        toast.success('Login realizado com sucesso!', {
          hideProgressBar: false,
          onClose: () => navigate('/panel')
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
        <h5>Acesse o sistema:</h5>
        <form onSubmit={handleSubmit}>
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
            type="submit"
            value="Entrar"
          />
        </form>

        <Link
          to="/signup"
          className="anchor-signup"
        >
          Clique aqui para cadastrar
        </Link>
      </div>
    </Container>
  );
}

export default SignIn;