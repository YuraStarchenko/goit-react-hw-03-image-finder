import PropTypes from 'prop-types';
import { Button } from './Button.styled.js';

export const LoadMore = ({ onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      Load More
    </Button>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func.isRequired,
};