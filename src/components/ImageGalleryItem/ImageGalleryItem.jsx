import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({ tags, webformatURL, largeImageURL }) => {
  return (
    <Item>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
