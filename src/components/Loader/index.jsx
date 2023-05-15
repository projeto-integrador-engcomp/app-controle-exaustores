import React from 'react';
import ReactLoading from 'react-loading';
import { Container } from './style';

const Loader = () => {
  return (
    <Container>
      <ReactLoading type='bars' color='#FBA94C' />
    </Container>
  );
}

export default Loader;