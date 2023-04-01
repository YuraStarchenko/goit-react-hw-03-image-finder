import { Component } from 'react';

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
      <li className="gallery-item">
        <img src="" alt="" />
      </li>
    );
  }
}
