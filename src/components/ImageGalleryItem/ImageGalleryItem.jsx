import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';
import css from './image-gallery-item.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({showModal}) => ({showModal: !showModal }));
  };

  render() {
    const {image: { webformatURL, largeImageURL, tags }} = this.props;
    const { showModal } = this.state;

    return (
      <>
        <li className={css.ImageGalleryItem}>
          <img
            src={webformatURL}
            alt={tags}
            className={css.ImageGalleryItem_image}
            onClick={this.toggleModal}
          />
        </li>
        {showModal && (
          <Modal image={largeImageURL} alt={tags} onClose={this.toggleModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;
