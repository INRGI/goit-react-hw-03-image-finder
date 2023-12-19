import PropTypes from 'prop-types';
import { Li } from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
    return (
        <Li>
            {/* {images.map(image => (
                
            ))} */}
        </Li>  
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default ImageGallery;