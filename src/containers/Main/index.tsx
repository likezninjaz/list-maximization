import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';
import List from '../List';

const Container = styled.main`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100vh;
`;

class Main extends Component {
  
  public render() {
    return (
      <Container>
        <Header />
        <List />
        <Footer />
      </Container>
    );
  }
}

export default Main;
