import { PureComponent } from 'react';
import Modal from '../Modal';

class ImageGalleryItem extends PureComponent {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };

    render() {
        const { showModal } = this.state;
        const { webformatURL, tag, largeImageURL } = this.props;

        return (
            <>
                <img
                    src={webformatURL}
                    alt={tag}
                    className="ImageGalleryItem-image"
                    onClick={this.toggleModal}
                />
                {showModal && (
                    <Modal
                        onClose={this.toggleModal}
                        tag={tag}
                        largeImageURL={largeImageURL}
                    />
                )}
            </>
        );
    }
}

export default ImageGalleryItem;
