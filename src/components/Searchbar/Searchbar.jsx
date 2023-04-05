import { Component } from 'react';
import PropTypes from 'prop-types';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  inputHandleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.props.onSubmit(inputValue);
    this.setState({ inputValue: '' });
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   if (this.state.inputValue.trim() === '') {
  //     Notify.info('Enter the name of the picture 🌅');
  //     return;
  //   }
  //   this.props.onSubmit(this.state.inputValue);
  //   this.setState({ inputValue: '' });
  // };

  render() {
    const { inputValue } = this.state;

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
            value={inputValue}
            placeholder="Search images and photos"
            onChange={this.inputHandleChange}
          />
        </Form>
      </Header>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};