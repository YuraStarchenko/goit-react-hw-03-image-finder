import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import {} from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import {} from './Loader/Loader';
import {} from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    searchImage: '',
  };

  createSearchImage = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <Container>
        <Searchbar createSearchImage={this.createSearchImage} />
        <ImageGallery searchImage={this.state.searchImage} />
        <GlobalStyle />
      </Container>
    );
  }
}
