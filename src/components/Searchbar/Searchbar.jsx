import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  inputHandleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
		e.preventDefault();
		
		const { searchQuery } = this.state;
    const { onSubmit } = this.props;

    if (this.state.searchQuery.trim() === '') {
      Notify.info('Enter the name of the picture 🌅');
      return;
    }
  	onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

	render() {
		const { searchQuery } = this.state;

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
            value={searchQuery}
            placeholder="Search images and photos"
            onChange={this.inputHandleChange}
          />
        </Form>
      </Header>
    );
  }
}
