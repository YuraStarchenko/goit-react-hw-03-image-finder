import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';

export class App extends Component {
  state = {
    showModal: false,
  };
  render() {
    return (
      <Container>
        <GlobalStyle />
      </Container>
    );
  }
}
