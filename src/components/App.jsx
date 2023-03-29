import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import {} from './Button/Button';
import {} from './ImageGallery/ImageGallery';
import {} from './ImageGalleryItem/ImageGalleryItem';
import {} from './Loader/Loader';
import {} from './Modal/Modal';
import {} from './Searchbar/Searchbar';

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
