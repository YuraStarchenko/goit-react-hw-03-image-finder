import PropTypes from 'prop-types';
import { Header, Form, Button, Input, Text } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export const Searchbar = ({ onSubmit }) => {
  return (
    <Header>
      <Form>
        <Button type="submit">
          <BsSearch />
          <Text>Search</Text>
        </Button>

        <Input
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};