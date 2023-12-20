import PropTypes from 'prop-types';
import { Img, Li } from './ImageGalleryItem.styled';
const { Component } = require("react");


class ImageGalleryItem extends Component{
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        // const { showModal } = this.state;
        const { image } = this.props;

        return (
            <Li>
                <Img
                    src={image.webformatURL}
                    alt={image.tags}
                    onClick={this.toggleModal}
                />
            </Li>
        );
    };
};

ImageGalleryItem.propTypes = {
    image:PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImageGalleryItem;