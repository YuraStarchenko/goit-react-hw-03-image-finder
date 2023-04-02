import { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  inputHandleChange = e => {
    this.setState({ inputValue: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
		e.preventDefault();
		
		if (this.state.inputValue.trim() === '') {
			alert('wcwec')
			return;
		}
      this.props.onSubmit(this.state.inputValue);
    this.setState({ inputValue: '' });
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
            inputValue={this.state.inputValue}
            placeholder="Search images and photos"
            onChange={this.inputHandleChange}
          />
        </Form>
      </Header>
    );
  }
}
