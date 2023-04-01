import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ImageGalleryItem key={item.id} item={item} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};