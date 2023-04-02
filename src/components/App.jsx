import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import {} from './Button/Button';
// import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import {} from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';

export class App extends Component {
  state = {
    image: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    isModalOpen: false,
    isLoading: false,
    error: null,
  };

  createSearchImage = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <Container>
        <Searchbar createSearchImage={this.createSearchImage} />
        {/* <ImageGallery searchImage={this.state.searchQuery} /> */}
        <Loader />
        <GlobalStyle />
      </Container>
    );
  }
}
