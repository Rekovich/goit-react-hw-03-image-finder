import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types'
import css from './modal.module.css';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscapeClose);
  }
  handleEscapeClose = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClose = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image, alt } = this.props;
    return createPortal(
      <div className={css.Overlay} onClick={this.handleBackdropClose}>
        <div className={css.Modal}>
          <img src={image} alt={alt} />
        </div>
      </div>, 
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;