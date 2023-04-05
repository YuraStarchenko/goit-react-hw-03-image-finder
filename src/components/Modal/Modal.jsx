import { Component } from 'react';
import PropTypes from 'prop-types';
import { Div, ModalImg } from './Modal.styled.js';

export class ModalImage extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.ModalKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.ModalKeydown);
  }

  ModalKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return (
      <Div onClick={this.handleClick}>
        <ModalImg>
          <img src={this.props.imgUrl} alt="" />
        </ModalImg>
      </Div>
    );
  }
}

ModalImage.proptTypes = {
  onClose: PropTypes.func.isRequired,
};