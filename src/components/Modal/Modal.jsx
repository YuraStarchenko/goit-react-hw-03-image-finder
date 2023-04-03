import { Component } from 'react';
import { Div, ModalImg } from './Modal.styled.js';

export class ModalImage extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.clickKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.clickKeyDown);
  }

  clickKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClick();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClick();
    }
  };

  render() {
    return (
      <Div onClick={this.handleClick}>
        <ModalImg>
          <img src={this.props.largeImageURL} alt="" />
        </ModalImg>
      </Div>
    );
  }
}