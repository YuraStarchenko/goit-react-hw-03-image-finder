import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { Container } from './Container.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { LoadMore } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { ModalImage } from './Modal/Modal';
import { fetchImage } from './PixabayApi/PixabayApi';
export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    error: null,
    isModalOpen: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  onSubmitSearchQuery = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  getImages = async () => {
    const { searchQuery, page } = this.state;

    this.setState({ isLoading: true });

    try {
      const { hits } = await fetchImage(searchQuery, page);

      this.setState(({ images, page }) => ({
        images: [...images, ...hits],
        page: page + 1,
			}));
			
    } catch (error) {
      this.setState({ error: 'Oops' });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getLargeImage = largeImage => {
    this.setState({ largeImage, isModalOpen: true });
  };

  toggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { images, largeImage, isModalOpen, isLoading, error } = this.state;
    const lengthImages = images.length >= 12;

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmitSearchQuery} />
        {error}

        <ImageGallery images={images} imageClick={this.getLargeImage} />

        {isLoading && <Loader />}

        {lengthImages && <LoadMore onLoadMore={() => this.getImages} />}

        {isModalOpen && (
          <ModalImage largeImageURL={largeImage} onClick={this.toggleModal} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
