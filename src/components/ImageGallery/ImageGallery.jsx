import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ images, imageClick }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          imageClick={imageClick}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  imageClick: PropTypes.func.isRequired,
};
