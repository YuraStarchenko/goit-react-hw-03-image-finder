import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { GlobalStyle } from '../GlobalStyle';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Container } from './Container.styled';
import { LoadMore } from './Button/Button';
import { ModalImage } from './Modal/Modal';
import { Loader } from './Loader/Loader';
import { fetchPictures } from './Api';
export class App extends Component {
  state = {
    images: [],
    status: '',
    numberPage: 1,
    loading: false,
    error: null,
    showModal: false,
    loadMore: null,
    largeImageUrl: '',
  };

  getLargeImgUrl = imgUrl => {
    this.setState({ largeImageUrl: imgUrl });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  searchResult = value => {
    this.setState({ query: value, numberPage: 1, images: [], loadMore: null });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({
      numberPage: prevState.numberPage + 1,
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    const { numberPage, query } = this.state;

    if (
      prevState.numberPage !== this.state.numberPage ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'loading' });

      fetchPictures(query, numberPage)
        .then(e =>
          this.setState(prevState => ({
            images: [...prevState.images, ...e.hits],
            status: '',
            loadMore: 12 - e.hits.length,
          }))
        )
        .catch(error => console.log(error));
    }
  }

  render() {
    const { images, status, showModal, largeImageUrl, loadMore } = this.state;

    return (
      <Container>
        <SearchBar onSubmit={this.searchResult} />
        {showModal && (
          <ModalImage imgUrl={largeImageUrl} onClose={this.toggleModal} />
        )}
        <ImageGallery images={images} onClick={this.getLargeImgUrl} />
        {status === 'loading' && <Loader />}
        {loadMore === 0 && <LoadMore onClick={this.handleLoadMore} />}
        <GlobalStyle />
      </Container>
    );
  }
}
