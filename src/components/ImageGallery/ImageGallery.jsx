import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items, imageClick }) => {
  return (
    <List>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} imageClick={imageClick} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
  imageClick: PropTypes.func.isRequired,
};
