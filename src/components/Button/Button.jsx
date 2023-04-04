import PropTypes from 'prop-types';
import { Button } from './Button.styled.js';

export const LoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore()}>
      Load More
    </Button>
  );
};

LoadMore.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};
