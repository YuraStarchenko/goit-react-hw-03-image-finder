import PropTypes from 'prop-types';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ items }) => {
  return (
    <List>
      {items.map(item => (
        <ImageGalleryItem
          key={item.id}
          tags={item.tags}
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
        />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  items: PropTypes.array.isRequired,
};
