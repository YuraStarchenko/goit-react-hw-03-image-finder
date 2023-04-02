import { Component } from 'react';
import { Header, Form, Button, Input } from './Searchbar.styled.js';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = ({ target: { searchQuery } }) => {
    this.setState({ searchQuery });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createSearchImage(this.state.searchQuery);
  };

  // componentDidUpdate(prevProps, prevState) {
  //   const searchImage = this.props.searchImage.trim();
  //   if (prevProps.searchImage !== searchImage && searchImage) { 
  //     console.log(searchImage);
  //   }
  // }

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
            searchQuery={this.state.searchQuery}
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
        </Form>
      </Header>
    );
  }
}
