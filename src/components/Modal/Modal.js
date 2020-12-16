import { PureComponent } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends PureComponent {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        }
    };

    handleOverlayClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { tag, largeImageURL } = this.props;
        return createPortal(
            <div className="Overlay" onClick={this.handleOverlayClick}>
                <div className="Modal">
                    <img src={largeImageURL} alt={tag} />
                </div>
            </div>,
            modalRoot,
        );
    }
}

export default Modal;
