import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled.js';

export const ImageGalleryItem = ({
  item: { tags, webformatURL, largeImageURL },
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
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
  imageClick: PropTypes.func.isRequired,
};
