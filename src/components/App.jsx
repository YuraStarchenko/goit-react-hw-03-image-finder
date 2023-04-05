import { Component } from 'react';
import axios from 'axios';
import { SearchBar } from './Searchbar/Searchbar';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './Container.styled';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalImage } from './Modal/Modal';
export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    loading: false,
    error: null,
    isModalOpen: false,
    totalHits: 0,
  };

  componentDidUpdate(perevProps, prevState) {
    const prevSearch = prevState.searchQuery;
    const nextSearch = this.state.searchQuery;

    if (prevSearch !== nextSearch) {
      this.setState({ loading: true, page: 1 });
      return axios
        .get(
          `https://pixabay.com/api/?q=${nextSearch}&page=1&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(data =>
          this.setState(prev => ({
            ...prev,
            images: data.data.hits,
            isLoading: false,
            totalHits: data.data.totalHits,
          }))
        )
        .catch(error => this.setState({ error: true }));
    }

    if (prevState.page < this.state.page) {
      this.setState({ isLoading: true });
      return axios
        .get(
          `https://pixabay.com/api/?q=${nextSearch}&page=${this.state.page}&key=33577731-7b9b7bf07a9d841c486c320f5&image_type=photo&orientation=horizontal&per_page=12`
        )
        .then(data =>
          this.setState(prevState => {
            return {
              images: [...prevState.images, ...data.data.hits],
            };
          })
        )
        .catch(error => this.setState({ error: true }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  onSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };


  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { images, largeImage, isModalOpen, loading, error } = this.state;
    const lengthImages = images.length >= 12;

    return (
      <Container>
        <SearchBar onSubmit={this.onSubmitSearchQuery} />
        {error}

        <ImageGallery items={images} imageClick={this.getLargeImage} />

        {loading && <Loader />}

        {lengthImages && <LoadMore onLoadMore={() => this.getImages} />}

        {isModalOpen && (
          <ModalImage largeImageURL={largeImage} onClick={this.toggleModal} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
