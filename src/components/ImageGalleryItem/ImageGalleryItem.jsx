import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({
  image: { tags, webformatURL, largeImageURL },
  imageClick,
}) => {
  const onClickImg = () => {
    imageClick(largeImageURL);
  };
  return (
    <Item>
      <Image src={webformatURL} alt={tags} onClick={onClickImg} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  imageClick: PropTypes.func.isRequired,
};
