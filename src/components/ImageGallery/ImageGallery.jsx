import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import css from './image-gallery.module.css';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    
       <ul className={css.ImageGallery}>
        {images.map(image => (
            <ImageGalleryItem key={image.id} image={image} />          
       ))}
      </ul>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
