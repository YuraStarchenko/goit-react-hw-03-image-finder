import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import {} from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import {} from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    images: [],
    inputValue: '',
    page: 1,
    largeImage: '',
    isModalOpen: false,
    isLoading: false,
    error: null,
  };

  onSubmitSearchImage = inputValue => {
    console.log(inputValue);
  };

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmitSearchImage} />
        <ImageGallery images={this.state.images} />
        <Loader />
        <GlobalStyle />
      </Container>
    );
  }
}
