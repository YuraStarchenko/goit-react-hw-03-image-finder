import { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {};

  componentDidUpdate() {}

  componentDidMount(prevProps, prevState) {
    fetch();
  }

  render() {
    return (
      <Header>
        <Form>
          <Button type="submit">
            <BsSearch />
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
  }
}
