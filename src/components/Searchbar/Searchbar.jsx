import { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createSearchImage(this.state.value);
  };

  render() {
    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <BsSearch />
          </Button>

          <Input
            type="text"
            autocomplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
