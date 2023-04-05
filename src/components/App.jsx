import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './Container.styled';
import { LoadMore } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ModalImage } from './Modal/Modal';
import { fetchImages } from './PixabayApi/PixabayApi';
export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    loading: false,
    error: null,
    isModalOpen: false,
  };

	componentDidUpdate(perevProps, prevState) {
		const prevSearch = prevState.searchQuery;
		const nextSearch = this.state.searchQuery;
		
    if (prevSearch !== nextSearch) {
      this.getImages();
    }
  }

  onSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  getImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });

    try {
      const { hits } = await fetchImages(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
      }));
    } catch (error) {
      this.setState({ error: 'Что-то пошло бокомy' });
    } finally {
      this.setState({ loading: false });
    }
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
