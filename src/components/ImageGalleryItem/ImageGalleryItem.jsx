import { Component } from 'react';
import { Item } from './ImageGalleryItem.styled.js';
export class ImageGalleryItem extends Component {
  state = {};
  componentDidUpdate(prevProps, prevState) {
    const searchImage = this.props.searchImage.trim();
    if (prevProps.searchImage !== searchImage && searchImage) {
      // fetch();
      console.log(searchImage);
    }
  }
  render() {
    return (
      <Item>
        <img src="" alt="" />
      </Item>
    );
  }
}
